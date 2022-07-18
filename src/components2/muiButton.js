import { render } from "@testing-library/react";
import * as Mui from "@mui/material";

import React, { useState } from "react";

export default function MuiButton(props) {
  const [textContent, setTextContent] = useState("Button");
  const handleText = (e) =>
    e.currentTarget.value.length !== 0
      ? setTextContent(e.currentTarget.value)
      : setTextContent("Button");

  const [variant, setVariant] = useState("contained");

  const { TextField, Select, MenuItem, Button } = Mui;
  return (
    <>
      <Select
        defaultValue={"contained"}
        onChange={(e) => setVariant(e.target.value)}
      >
        <MenuItem value="contained">contained</MenuItem>
        <MenuItem value="text">text</MenuItem>
        <MenuItem value="outlined">outlined</MenuItem>
      </Select>
      <TextField onChange={handleText} />
      <Button variant={variant}>{textContent}</Button> 
    </>
  );
}
