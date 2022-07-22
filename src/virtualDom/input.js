import { useState, useCallback } from "react";
import produce from "immer";

import uniqid from "uniqid";

import { Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

let addMe = {
  Element: {
    treeRef: uniqid(),
    tagName: "h1",
    props: {
      id: "top",
    },
    children: [{ textContent: "it works, sort of" }],
  },
};

export default function Input(props) {
  const { Dom, setDom } = props;

  const deleteNodeFromState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        deleteNode(draft, targetId);
      })
    );
  }, []);

  const addNodeToState = useCallback((targetId) => {
    setDom(
      produce((draft) => {
        addNode(draft, targetId);
      })
    );
  }, []);

  const renderTree = (dom, isChild) => {
    const { Element } = dom;
    const offset = () => (isChild ? { marginLeft: "10px" } : { marginLeft: "-2px" });

    const hasChildren = () => {
      const { children } = Element;
      if (children === undefined || children.length === 0) return false;
      if (children !== undefined && Object.keys(children[0])[0] !== "textContent")
        return true;
    };

    return (
      <div className="node" style={offset()} key={Element.treeRef}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          flexWrap="nowrap"
        >
          <p>{Element.tagName}</p>
          <ClearIcon onClick={() => deleteNodeFromState(Element.treeRef)} />
          <AddCircleOutlineOutlinedIcon onClick={() => addNodeToState(Element.treeRef)} />
        </Grid>
        {hasChildren(dom) ? Element.children.map((dom) => renderTree(dom, true)) : null}
      </div>
    );
  };

  function addNode(node, targetId) {
    const keys = Object.keys(node);
    const key = keys[0];
    if (node[key].treeRef === targetId) {
      let newArr = [...node.Element.children, addMe];
      node.Element.children = newArr;
    } else {
      if (Array.isArray(node[key].children) && node[key].children.length > 0) {
        node[key].children.forEach((child) => addNode(child, targetId));
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

  return <div id="domTree">{renderTree(Dom)}</div>;
}
