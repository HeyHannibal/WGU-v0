import { TextField } from "@mui/material";
import useEditor from "../useEditor";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

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
        value={divNode.style.width ? divNode.style.width.split("p")[0] : 30}
        onChange={(e) => editStyle("width", e.target.value + "px")}
        InputLabelProps={{
          shrink: true,
        }}
      />{" "}
      <FormControl fullWidth>
        <InputLabel>Display</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={divNode.style.display ? divNode.style.display : "block"}
          label="Age"
          onChange={(e) => editStyle("display", e.target.value)}
        >
          <MenuItem value={"flex"}>flex</MenuItem>
          <MenuItem value={"grid"}>grid</MenuItem>
          <MenuItem value={"block"}>block</MenuItem>
          <MenuItem value={"inline"}>inline</MenuItem>
        </Select>
      </FormControl>
      <input
        type="color"
        value={divNode.style.color ? divNode.style.color : "#4c00ff"}
        onChange={(e) => editStyle("backgroundColor", e.target.value)}
      ></input>
    </div>
  );
}
