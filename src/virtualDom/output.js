import produce from "immer";
import React, { useState, useCallback } from "react";
import TextWrapper from "../elemWrappers/textWrapper";
let addProps = (elem) => (elem.props !== undefined ? elem.props : {});

const wrappedText = (textElem) => {
  return React.createElement(
    TextWrapper,
    {},
    React.createElement(
      textElem.tagName,
      addProps(textElem),
      textElem.children[0].textContent
    )
  );
};

function renderVirtualDom(virtualDom) {
  const thisLayer = Object.keys(virtualDom);
  return thisLayer.map((key) => {
    const elem = virtualDom[key];
    if (elem.children === undefined) {
      return React.createElement(elem.tagName, addProps(elem));
    } else if (
      elem.children.length > 0 &&
      Object.keys(elem.children[0])[0] === "textContent"
    ) {
      // return React.createElement(
      //   elem.tagName,
      //   addProps(elem),
      //   elem.children[0].textContent
      // );
      return wrappedText(elem);
    } else {
      return React.createElement(
        elem.tagName,
        addProps(elem),
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

export default function Output(props) {
  const { Dom } = props;

  return <div id="work">{renderVirtualDom(Dom)}</div>;
}

// return keys.map((elem) => {
// return React.createElement(elem, {},Object.keys(virtualDom[elem]).map(elemm => {
// if(elemm === 'comp') React.createElement(MuiButton)
// else return React.createElement(elemm,{}, virtualDom[elem][elemm].textContent)
// }));
// });
