import React, { useState, useCallback } from "react";

export default function Output(props) {
  const { Dom, setElementToEdit } = props;

  const elementArguments = (elem) => {
    const element = elem.tagName;
    const props = {
      ...elem["props"],
      style: elem.style,
      onClick: (e) => {
        e.stopPropagation();
        setElementToEdit({
          type: elem.tagName,
          ref: elem.treeRef,
        });
      },
    };
    const children = elem.children[0].textContent;
    return [element, props, children];
  };

  const renderText = (elem) => {
    return React.createElement(...elementArguments(elem));
  };

  const renderDiv = (elem) => {
    const click = () => {
      return elem.tagName === "main"
        ? null
        : setElementToEdit({
            type: elem.tagName,
            ref: elem.treeRef,
          });
    };

    return React.createElement(
      elem.tagName,
      {
        ...elem["props"],
        onClick: (e) => {
          e.stopPropagation();
          click();
        },
        style: elem.style,
      },
      renderChildNodes(elem.children)
    );
  };

  function renderVirtualDom(virtualDom) {
    const element = [virtualDom.Element];
    // checking for children  elem.children.length > 0 &&??
    return element.map((elem) => {
      if (elem.tagName === "p") {
        return renderText(elem);
      } else if (elem.tagName === "div" || elem.tagName === "main") {
        return renderDiv(elem);
      }
    });
  }

  function renderChildNodes(virtualDom) {
    return virtualDom.map((elem) => {
      if (elem.Element.children !== undefined) {
        return renderVirtualDom(elem);
      }
      return React.createElement(elem.Element.tagName, elem.Element.props);
    });
  }

  return <div id="work">{renderVirtualDom(Dom, setElementToEdit)}</div>;
}
