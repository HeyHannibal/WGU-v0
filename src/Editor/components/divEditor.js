import { useEffect, useState, useCallback } from "react";
import produce from "immer";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useEditor from "../useEditor";

export default function TextEditor(props) {
  const { Dom, setDom, findNode, target } = props;

  const { editStyle } = useEditor(Dom, setDom, findNode, target);

  const divNode = findNode(Dom, target);

  return (
    <div id="editor" style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        id="outlined-size-small"
        size="small"
        label="Width"
        onChange={(e) => editStyle("height", e.target.value)}
        value={divNode.children[0].textContent}
        style={{ marginTop: "1rem" }}
      />
    </div>
  );
}
