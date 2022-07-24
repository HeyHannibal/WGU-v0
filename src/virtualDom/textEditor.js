import { useEffect, useState, useCallback } from "react";
import produce from "immer";
import { TextField } from "@mui/material";

import useEditor from "./useEditor";

export default function TextEditor(props) {
  const { Dom, setDom, findNode, target } = props;

  const { text } = useEditor(Dom, setDom, findNode, target);

  const textNode = findNode(Dom, target);

  return (
    <div id="editor">
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
        onChange={(e) => text(e.target.value)}
        value={textNode.children[0].textContent}
      />
      <button onClick={() => text(Math.random())}></button>
    </div>
  );
}
