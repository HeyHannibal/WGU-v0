import produce from "immer";
import React, { useState, useCallback } from "react";

const virtualDom = {
  Element: {
    findMe: this,

    tagName: "div",
    props: {
      id: "Output",
    },
    children: [
      {
        Element: {
          tagName: "h2",
          props: {
            id: "top",
          },

          children: [{ textContent: "Hello World" }],
        },
      },
      {
        Element: {
          tagName: "h1",
          nodeId: "2",
          props: {
            id: "top",
          },

          children: [{ textContent: "Hello World" }],
        },
      },
      {
        Element: {
          tagName: "div",
          children: [
            {
              Element: {
                tagName: "p",
                children: [
                  {
                    Element: {
                      tagName: "span",
                      props: {
                        id: "ck",
                      },
                      children: [
                        {
                          textContent: "Just Tell ME what to DO PLEASE",
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      
    ],
  },
};

let addProps = (elem) => (elem.props !== undefined ? elem.props : {});

function traverseVirtualDom(virtualDom) {
  const thisLayer = Object.keys(virtualDom);
  return thisLayer.map((key) => {
    const elem = virtualDom[key];
    if (elem.children === undefined) {
      return React.createElement(elem.tagName, addProps(elem));
    } else if (Object.keys(elem.children[0])[0] === "textContent") {
      return React.createElement(
        elem.tagName,
        addProps(elem),
        elem.children[0].textContent
      );
    } else {
      return React.createElement(
        elem.tagName,
        addProps(elem),
        traverseChildNodes(elem.children)
      );
    }
  });
}

function traverseChildNodes(virtualDom) {
  return virtualDom.map((elem) => {
    if (elem.Element.children !== undefined) {
      return traverseVirtualDom(elem);
    }
    return React.createElement(elem.Element.tagName, addProps(elem.Element));
  });
}

export default function Output(props) {
  const [dom, setDom] = useState(virtualDom);

  return <div id="work">{traverseVirtualDom(dom)}</div>;
}

// return keys.map((elem) => {
// return React.createElement(elem, {},Object.keys(virtualDom[elem]).map(elemm => {
// if(elemm === 'comp') React.createElement(MuiButton)
// else return React.createElement(elemm,{}, virtualDom[elem][elemm].textContent)
// }));
// });
