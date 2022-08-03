import { useState } from "react";

import CropSquareSharpIcon from "@mui/icons-material/CropSquareSharp";
import Toolbar from "@mui/material/Toolbar";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    palette: {
      primary: {
        main: "#white",
        darker: "#053e85",
      },
      action: {
        main: "#blue",
        contrastText: "#fff",
      },
    },
  },
});

export default function PickElement(props) {
  const { activeElement, setActiveElement } = props;

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
