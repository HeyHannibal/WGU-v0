import React from "react";
import MuiButton from "./muiButton";
const virtualDom = {
  div: {
    h1: {
        textContent: 'Hello World'
    },
    p: {
        textContent:'Now cooking with fire'
    },
    comp: {
      obj: <MuiButton/>
    }
  },
};

export default function Output(props) {
  function rndr() {
    const keys = Object.keys(virtualDom);

    return keys.map((elem) => {
      return React.createElement(elem, {},Object.keys(virtualDom[elem]).map(elemm => {
        if(elemm === 'comp') React.createElement(MuiButton)
        else return React.createElement(elemm,{}, virtualDom[elem][elemm].textContent)
      }));
    });
  }

  return (
    <div>
        {rndr()}
    </div>
  );
}
