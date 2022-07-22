import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "./virtualDom/input";
import Output from "./virtualDom/output";
import MuiButton from "./components/muiButton";
import VirtualDom from "./virtualDom/virtualDom";
function App() {
  return (
    <div className="App">
      <VirtualDom></VirtualDom>
    </div>
  );
}

export default App;
