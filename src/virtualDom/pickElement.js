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

  const isActive = (tagName) => {
    return tagName === activeElement ? { color: "#0084ff" } : { color: "#fff" };
  };

  const theme = createTheme({
    components: {
      // Name of the component
      MuiIcon: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "2rem",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Toolbar id="toolbar">
        <Icon
          sx={isActive("div")}
          baseClassName="material-symbols-sharp"
          onClick={() => setActiveElement("div")}
        >
          check_box_outline_blank
        </Icon>

        <Icon
          sx={isActive("p")}
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
