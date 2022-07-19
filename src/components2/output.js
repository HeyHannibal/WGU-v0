import React from "react";
import MuiButton from "./muiButton";
const virtualDom = {
  Element: {
    tagName: "div",
    props: {
      id: "Output",
    },
    children: [
      {
        Element: {
          tagName: "h1",
          props: {
            id: "top",
          },

          children: [
            {
              Element: {
                tagName: "span",
              },
            },
          ],
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
console.log(
  addProps({
    props: {
      aaa: "aaa",
    },
  })
);
function traverseVirtualDom(virtualDom) {
  const thisLayer = Object.keys(virtualDom);
  return thisLayer.map((key) => {
    const elem = virtualDom[key];
    if (elem.children === undefined) {
      return React.createElement(elem.tagName, addProps(elem));
    } else {
      return React.createElement(
        elem.tagName,
        {},
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
  return <div>{traverseVirtualDom(virtualDom)}</div>;
}

// return keys.map((elem) => {
// return React.createElement(elem, {},Object.keys(virtualDom[elem]).map(elemm => {
// if(elemm === 'comp') React.createElement(MuiButton)
// else return React.createElement(elemm,{}, virtualDom[elem][elemm].textContent)
// }));
// });
