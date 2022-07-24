import { useState } from "react";

import CropSquareSharpIcon from "@mui/icons-material/CropSquareSharp";
import Toolbar from "@mui/material/Toolbar";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export default function PickElement(props) {
  const { activeElement, setActiveElement } = props;

  return (
    <Toolbar id="toolbar">
      <CropSquareSharpIcon
        color={activeElement === "div" ? "primary" : "action"}
        fontSize="large"
        onClick={() => setActiveElement("div")}
      />
      <TextFieldsIcon
        color={activeElement === "p" ? "primary" : "action"}
        fontSize="large"
        onClick={() => setActiveElement("p")}
      />
    </Toolbar>
  );
}
