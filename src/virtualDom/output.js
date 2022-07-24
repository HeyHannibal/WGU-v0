import React, { useState, useCallback } from "react";

let addProps = (elem) => (elem.props !== undefined ? elem.props : {});

export default function Output(props) {
  const { Dom, setSelectedTextId } = props;

  function renderVirtualDom(virtualDom) {
    const element = [virtualDom.Element];

    return element.map((elem) => {
      if (elem.children.length > 0 && elem.tagName === "p") {
        return React.createElement(
          elem.tagName,
          {
            ...addProps(elem),
            style: elem.style,

            onClick: () => {
              setSelectedTextId(elem.treeRef);
            },
          },
          elem.children[0].textContent
          //+ "   ----" + elem.treeRef
        );
      } else {
        return React.createElement(
          elem.tagName,
          {
            ...addProps(elem),
            style: elem.style,
          },
          renderChildNodes(elem.children)
        );
      }
    });
  }

  function renderChildNodes(virtualDom) {
    return virtualDom.map((elem) => {
      if (elem.Element.children !== undefined) {
        return renderVirtualDom(elem);
      }
      return React.createElement(elem.Element.tagName, addProps(elem.Element));
    });
  }

  return <div id="work">{renderVirtualDom(Dom, setSelectedTextId)}</div>;
}

// return keys.map((elem) => {
// return React.createElement(elem, {},Object.keys(virtualDom[elem]).map(elemm => {
// if(elemm === 'comp') React.createElement(MuiButton)
// else return React.createElement(elemm,{}, virtualDom[elem][elemm].textContent)
// }));
// });
