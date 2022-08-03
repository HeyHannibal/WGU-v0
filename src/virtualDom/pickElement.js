import { useState } from "react";

import CropSquareSharpIcon from "@mui/icons-material/CropSquareSharp";
import Toolbar from "@mui/material/Toolbar";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Icon from "@mui/material/Icon";
import blue from "@mui/material/colors/blue";

export default function PickElement(props) {
  const { activeElement, setActiveElement } = props;

  return (
    <ThemeProvider theme={theme}>
      <Toolbar id="toolbar">
        <Icon
          color="primary"
          baseClassName="material-symbols-sharp"
          onClick={() => setActiveElement("div")}
        >
          check_box_outline_blank
        </Icon>

        <Icon
          onClick={() => setActiveElement("p")}
          baseClassName="material-symbols-sharp"
        >
          text_fields
        </Icon>
      </Toolbar>
    </ThemeProvider>
  );
}

//  <CropSquareSharpIcon
// color={activeElement === "div" ? "#fff" : "#fff"}
// fontSize="large"
//
// />
