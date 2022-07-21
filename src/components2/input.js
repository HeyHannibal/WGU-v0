import { useState, useCallback } from "react";
import produce from "immer";
import { TreeItem } from "@mui/lab";
import { TreeView } from "@mui/lab";

import ClearIcon from '@mui/icons-material/Clear';
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
    ],
  },
};

const del = (elem) => delete elem.Element;

export default function Input() {
  const [Dom, setDom] = useState(virtualDom);

  const changeDom = useCallback(() => {
    setDom(
      produce((draft) => {
        draft.Element.props.id = "hi";
      })
    );
  }, []);

  const renderTree = (dom, isChild) => {
    const offset = () => isChild ?  {marginLeft: '10px' } : {marginLeft: '-2px' } 
    return (
      <div className="node" style={offset()}>
        <div style={{display:'flex'}}>
          <p>{dom.Element.tagName}</p>
          <ClearIcon/>
        </div>
        {dom.Element.children !== undefined &&
        Object.keys(dom.Element.children[0])[0] !== "textContent"
          ? dom.Element.children.map((dom) => renderTree(dom, true))
          : null}
      </div>
    );
  };

  return <div id='domTree'>{renderTree(virtualDom)}</div>;
}

// let count = 0;
// const renderTree = (dom) => {
//   count++;
//   return (
//     <TreeItem
//       nodeId={count.toString()}
//       label={dom.Element.tagName}
//       style={{position:'relative'}}
//     >
//       <span style={{position:'absolute', 'top':'1px'}} onClick={() => del(dom)}>d</span>

//       {dom.Element.children !== undefined &&
//       Object.keys(dom.Element.children[0])[0] !== "textContent"
//         ? dom.Element.children.map((dom) => renderTree(dom))
//         : null}
//     </TreeItem>
//   );
// };

// return (
//   <div onClick={() => console.log(virtualDom)}>
//     <TreeView>{renderTree(virtualDom)}</TreeView>
//   </div>
// );
