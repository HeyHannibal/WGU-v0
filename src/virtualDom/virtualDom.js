import { useState, useCallback } from "react";
import produce from "immer";
import uniqid from "uniqid";
import Input from "./input";
import Output from "./output";
import PickElement from "./pickElement";
import { vrDom } from "./domObj";
import Element from "./domElements";
export default function VirtualDom() {
  const [Dom, setDom] = useState(vrDom);

  const [activeElement, setActiveElement] = useState("div");

  const deleteNodeFromState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        deleteNode(draft, targetId);
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

  const hasChildren = (element) => {
    const { children } = Element;
    if (children === undefined || children.length === 0) return false;
    if (children !== undefined && Object.keys(children[0])[0] !== "textContent")
      return true;
  };

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
  const props = { deleteNodeFromState, addNodeToState, Dom };
  return (
    <>
      <PickElement activeElement={activeElement} setActiveElement={setActiveElement} />
      <div id="workspace">
        <Input {...props} />
        <Output Dom={Dom} />
      </div>
    </>
  );
}
