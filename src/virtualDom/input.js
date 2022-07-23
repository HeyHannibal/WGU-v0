import { useState, useCallback } from "react";
import produce from "immer";

import uniqid from "uniqid";

import { Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function Input(props) {
  const { Dom, deleteNodeFromState, addNodeToState } = props;

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
          justifyContent="space-between"
          flexWrap="nowrap"
        >
          <p style={{ marginRight: "auto" }}>{Element.tagName}</p>
          <ClearIcon onClick={() => deleteNodeFromState(Element.treeRef)} />
          {Element.tagName === "div" ? (
            <AddCircleOutlineOutlinedIcon
              onClick={() => addNodeToState(Element.treeRef)}
            />
          ) : null}
        </Grid>
        {hasChildren(dom) ? Element.children.map((dom) => renderTree(dom, true)) : null}
      </div>
    );
  };

  return <div id="domTree">{renderTree(Dom)}</div>;
}
