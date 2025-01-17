import { useEffect, useState, useCallback } from "react";
import produce from "immer";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useEditor from "../useEditor";
import Draggable from "react-draggable";

export default function TextEditor(props) {
  const { Dom, setDom, findNode, target } = props;

  const { editText, editStyle } = useEditor(Dom, setDom, findNode, target.ref);

  const textNode = findNode(Dom, target.ref);

  return (
    <div id="editor">
      <TextField
        id="outlined-size-small"
        size="small"
        label="Edit Text Content"
        onChange={(e) => editText(e.target.value)}
        value={textNode.children[0].textContent}
        style={{ marginTop: "1rem" }}
      />
      <Button size="small" onClick={() => editStyle("fontWeight", "lighter")}>
        lighter
      </Button>
      <Button size="small" onClick={() => editStyle("fontWeight", "normal")}>
        normal
      </Button>
      <Button size="small" onClick={() => editStyle("fontWeight", "bolder")}>
        Bold
      </Button>

      <input
        type="color"
        value={textNode.style.color ? textNode.style.color : "#4c00ff"}
        onChange={(e) => editStyle("color", e.target.value)}
      ></input>
    </div>
  );
}
