import { useEffect, useState, useCallback } from "react";
import produce from "immer";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useEditor from "../useEditor";

export default function TextEditor(props) {
  const { Dom, setDom, findNode, target } = props;

  const { editStyle } = useEditor(Dom, setDom, findNode, target.ref);

  const divNode = findNode(Dom, target.ref);
  console.log(divNode);
  return (
    <div id="editor">
      <TextField
        id="outlined-number"
        label="H"
        type="number"
        value={divNode.style.height ? divNode.style.height.split("p")[0] : 30}
        onChange={(e) => editStyle("height", e.target.value + "px")}
        InputLabelProps={{
          shrink: true,
        }}
      />{" "}
      <TextField
        id="outlined-number"
        label="W"
        type="number"
        value={divNode.style.height ? divNode.style.width.split("p")[0] : 30}
        onChange={(e) => editStyle("width", e.target.value + "px")}
        InputLabelProps={{
          shrink: true,
        }}
      />{" "}
      <input
        type="color"
        value={divNode.style.color ? divNode.style.color : "#4c00ff"}
        onChange={(e) => editStyle("backgroundColor", e.target.value)}
      ></input>
    </div>
  );
}
