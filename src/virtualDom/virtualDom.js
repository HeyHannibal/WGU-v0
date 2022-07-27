import { useState, useCallback, useEffect } from "react";
import produce from "immer";
import uniqid from "uniqid";
import Input from "./input";
import Output from "./output";
import PickElement from "./pickElement";
import { vrDom } from "./domObj";
import Element from "./domElements";
import TextEditor from "../Editor/components/textEditor";

export default function VirtualDom() {
  const [Dom, setDom] = useState(vrDom);
  const [activeElement, setActiveElement] = useState("p");
  const [selectedElement, setSelectedElement] = useState();

  const deleteNodeFromState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        setSelectedElement(false); // so that the editor doesn't try to access deleted element
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
          console.log("call");
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

  return (
    <>
      <PickElement activeElement={activeElement} setActiveElement={setActiveElement} />
      <div id="workspace">
        <Input {...props} />
        <Output Dom={Dom} setSelectedElement={setSelectedElement} />
        {selectedElement ? (
          <TextEditor
            findNode={findNode}
            setDom={setDom}
            Dom={Dom}
            target={selectedElement.ref}
          />
        ) : null}
      </div>
    </>
  );
}

// | old way of  updating nodes

// function addNode(node, targetId, element) {
//   const keys = Object.keys(node);
//   const key = keys[0];
//   if (node[key].treeRef === targetId) {
//     let newArr = [...node.Element.children, element];
//     node.Element.children = newArr;
//   } else {
//     if (Array.isArray(node[key].children) && node[key].children.length > 0) {
//       node[key].children.forEach((child) => addNode(child, targetId, element));
//     }
//   }
// }

//function deleteNode(node, targetId, parent) {
//  const keys = Object.keys(node);
//  const key = keys[0];
//  if (node[key].treeRef === targetId) {
//    let newArr = parent.Element.children.filter(
//      (child) => child.Element.treeRef !== targetId
//    );
//    parent.Element.children = newArr;
//  } else {
//    if (Array.isArray(node[key].children) && node[key].children.length > 0) {
//      node[key].children.forEach((child) => deleteNode(child, targetId, node));
//    }
//  }
//}

// const updateTextNode = useCallback(
//   (nodeId) => {
//     setDom(
//       produce((draft) => {
//         findNode(draft, nodeId, changeText);
//       })
//     );
//   },
//   [selectedElement]
// );

// useEffect(() => {
//   updateTextNode(selectedElement);
// }, [selectedElement]);
