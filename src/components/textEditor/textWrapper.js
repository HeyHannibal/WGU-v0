import { render } from "@testing-library/react";
import * as Mui from "@mui/material";
import FontEditor from "./fontEditor";
import React, { useCallback, useState } from "react";

export default function TextWrapper({ children }) {
  const [textContent, setTextContent] = useState("Hello World");
  const [openEditor, setOpenEditor] = useState(false);

  const open = () => setOpenEditor((prev) => !prev);

  const [style, setStyle] = useState({
    fontStyle: "normal",
    fontWeight: "normal",
  });

  const handleText = (e) =>
    e.currentTarget.value.length !== 0
      ? setTextContent(e.currentTarget.value)
      : setTextContent("Hello World");

  const { TextField } = Mui;

  return (
    <div
      //  onFocus={() => console.log("elemo")}
      //  onClick={open}
      style={{ backgroundColor: "lightblue" }}
      className="text"
    >
      {/* {openEditor ? <FontEditor stl={style} setStyle={setStyle} /> : null} */}
      <TextField onChange={handleText} defaultValue={textContent} />
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { style: style }, [textContent]);
      })}
    </div>
  );
}
