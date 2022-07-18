
import React from "react";

import create from "./muiWrapper";
import { Button } from "@mui/material";
import { ButtonUnstyled } from "@mui/base";
import MuiWrapper from "./muiWrapper";
import Movable from "./movable";

// | V0
export default function Output(props) {
  const renderAll = props.toRender.map((Item) => (
    <Movable>
      <MuiWrapper>
        <Item>AAA</Item>
      </MuiWrapper>
    </Movable>
  ));
// 
  return <div id="Output">{renderAll}</div>
}

// export default function Output(props) {
//     return   React.createElement('div',{},[React.createElement('h1'), React.createElement('p')])

// }