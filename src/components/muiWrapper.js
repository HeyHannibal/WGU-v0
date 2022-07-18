import { render } from "@testing-library/react";
import * as Mui from "@mui/material";

import React, { useCallback, useState } from "react";

export default function MuiButtonWrapper(props) {
  const { children } = props;
  const [textContent, setTextContent] = useState("Button");
  const handleText = (e) =>
    e.currentTarget.value.length !== 0
      ? setTextContent(e.currentTarget.value)
      : setTextContent("Button");

  const [variant, setVariant] = useState("contained");

  const { TextField, Select, MenuItem } = Mui;
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
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          children: textContent,
          variant: variant,
        })
      )}
    </>
  );
}
