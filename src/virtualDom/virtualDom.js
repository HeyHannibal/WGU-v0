import { useState, useCallback, useEffect } from "react";
import produce from "immer";
import uniqid from "uniqid";
import Input from "./input";
import Output from "./output";
import PickElement from "./pickElement";
import { vrDom } from "./domObj";
import Element from "./domElements";
import TextEditor from "./textEditor";
import { Button } from "@mui/material";

export default function VirtualDom() {
  const [Dom, setDom] = useState(vrDom);

  const [activeElement, setActiveElement] = useState("div");

  const [selectedTextId, setSelectedTextId] = useState();
  // const [selectedTextNode, setSelectedTextNode] = useState();

  // useEffect(() => {
  //   setSelectedTextNode(findNode(Dom, selectedTextId));
  // }, [selectedTextId]);

  const deleteNodeFromState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        console.log(deleteNode(draft, targetId));
      })
    );
  }, []);

  const addNodeToState = useCallback(
    (targetId) => {
      setDom(
        produce((draft) => {
          addNode(draft, targetId, Element(activeElement));
        })
      );
    },
    [activeElement]
  );

  // const updateTextNode = useCallback(
  //   (nodeId) => {
  //     setDom(
  //       produce((draft) => {
  //         findNode(draft, nodeId, changeText);
  //       })
  //     );
  //   },
  //   [selectedTextId]
  // );

  // useEffect(() => {
  //   updateTextNode(selectedTextId);
  // }, [selectedTextId]);

  function addNode(node, targetId, element) {
    const keys = Object.keys(node);
    const key = keys[0];
    if (node[key].treeRef === targetId) {
      let newArr = [...node.Element.children, element];
      node.Element.children = newArr;
    } else {
      if (Array.isArray(node[key].children) && node[key].children.length > 0) {
        node[key].children.forEach((child) => addNode(child, targetId, element));
      }
    }
  }

  function deleteNode(node, targetId, parent) {
    const keys = Object.keys(node);
    const key = keys[0];
    if (node[key].treeRef === targetId) {
      // filter the array with id from function call
      setSelectedTextId(false); // so that editor doesn't try access non existing node
      let newArr = parent.Element.children.filter(
        (child) => child.Element.treeRef !== targetId
      );
      parent.Element.children = newArr;
    } else {
      if (Array.isArray(node[key].children) && node[key].children.length > 0) {
        node[key].children.forEach((child) => deleteNode(child, targetId, node));
      }
    }
  }

  function findNode(node, nodeId) {
    const elem = node.Element;
    if (elem.treeRef === nodeId) {
      return elem;
    } else if (
      Array.isArray(elem.children) &&
      elem.children.length > 0 &&
      elem.tagName !== "p"
    ) {
      for (let i = 0; i < elem.children.length; i++) {
        const theNode = findNode(elem.children[i], nodeId);
        if (theNode !== undefined) {
          return theNode;
        }
      }
    }
  }

  const props = { deleteNodeFromState, addNodeToState, Dom };

  return (
    <>
      <PickElement activeElement={activeElement} setActiveElement={setActiveElement} />
      <div id="workspace">
        <Input {...props} />
        <Output Dom={Dom} setSelectedTextId={setSelectedTextId} />
        {selectedTextId ? (
          <TextEditor
            findNode={findNode}
            setDom={setDom}
            Dom={Dom}
            target={selectedTextId}
          />
        ) : null}
      </div>
    </>
  );
}
