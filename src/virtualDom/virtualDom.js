import { useState, useCallback } from "react";
import produce from "immer";
import Input from "./input";
import Output from "./output";
import PickElement from "./pickElement";
import { vrDom } from "./domObj";
import Element from "./domElements";

import TextEditor from "../Editor/components/textEditor";
import DivEditor from "../Editor/components/divEditor";

export default function VirtualDom() {
  const [Dom, setDom] = useState(vrDom);
  const [activeElement, setActiveElement] = useState("p");
  const [elementToEdit, setElementToEdit] = useState();

  const deleteNodeFromState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        setElementToEdit(false); // so that the editor doesn't try to access deleted element
        const targetNode = findParentNode(draft, targetId);
        const filtered = targetNode.children.filter(
          (child) => child.Element.treeRef !== targetId
        );
        targetNode.children = filtered;
      })
    );
  }, []);

  const addNodeToState = useCallback(
    (targetId) => {
      setDom(
        produce((draft) => {
          const targetNode = findNode(draft, targetId);
          targetNode.children.push(Element(activeElement));
        })
      );
    },
    [activeElement]
  );

  function findParentNode(node, nodeId, parent) {
    const elem = node.Element;
    if (elem.treeRef === nodeId) {
      return parent;
    } else if (
      Array.isArray(elem.children) &&
      elem.children.length > 0 &&
      elem.tagName !== "p"
    ) {
      for (let i = 0; i < elem.children.length; i++) {
        const theNode = findParentNode(elem.children[i], nodeId, elem);
        if (theNode !== undefined) {
          return theNode;
        }
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

  const props = { deleteNodeFromState, addNodeToState, Dom, findParentNode };

  const editorProps = { findNode, setDom, Dom, target: elementToEdit };

  const editors = {
    p: <TextEditor {...editorProps} />,
    div: <DivEditor {...editorProps} />,
  };

  function selectEditor(elementToEdit) {
    if (elementToEdit === undefined) return;
    return editors[elementToEdit.type];
  }

  return (
    <>
      <PickElement activeElement={activeElement} setActiveElement={setActiveElement} />
      <div id="workspace">
        <Input {...props} />
        <Output Dom={Dom} setElementToEdit={setElementToEdit} />
        {selectEditor(elementToEdit)}
      </div>
    </>
  );
}
