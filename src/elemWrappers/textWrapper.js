import { render } from "@testing-library/react";
import * as Mui from "@mui/material";

import React, { useCallback, useState } from "react";

export default function TextWrapper(props) {
  const { children } = props;

  const [textContent, setTextContent] = useState("Hello World");

  const handleText = (e) =>
    e.currentTarget.value.length !== 0
      ? setTextContent(e.currentTarget.value)
      : setTextContent("Hello World");

  const { TextField } = Mui;

  return (
    <div
      onFocus={() => console.log("elemo")}
      style={{ backgroundColor: "lightblue" }}
      className="text"
    >
      {/* <TextField onChange={handleText} /> */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {}, [textContent])
      )}
    </div>
  );
}
