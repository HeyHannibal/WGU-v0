import { useState, useCallback } from "react";
import produce from "immer";

import uniqid from "uniqid";

import { Grid } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

let vrDom = {
  Element: {
    treeRef: uniqid(),
    tagName: "div",
    props: {
      id: "Output",
    },
    children: [
      {
        Element: {
          treeRef: uniqid(),
          tagName: "h2",
          props: {
            id: "top",
          },
        },
      },
      {
        Element: {
          treeRef: uniqid(),
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
          treeRef: uniqid(),
          tagName: "section",

          children: [
            {
              Element: {
                treeRef: uniqid(),
                tagName: "h2",
                props: {
                  id: "top",
                },
              },
            },
            {
              Element: {
                treeRef: uniqid(),
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
                treeRef: uniqid(),
                tagName: "div",
                props: {
                  id: "Output",
                },
                children: [
                  {
                    Element: {
                      treeRef: uniqid(),
                      tagName: "h2",
                      props: {
                        id: "top",
                      },
                    },
                  },
                  {
                    Element: {
                      treeRef: uniqid(),
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
            },
          ],
        },
      },
    ],
  },
};

export default function Input() {
  const [Dom, setDom] = useState(vrDom);

  const renderTree = (dom, isChild) => {
    const offset = () =>
      isChild ? { marginLeft: "10px" } : { marginLeft: "-2px" };
    return (
      <div className="node" style={offset()} key={dom.Element.treeRef}>
        <Grid container alignItems="center" justifyContent="space-around">
          <p>{dom.Element.tagName}</p>
          <ClearIcon onClick={() => deleteFromState(dom.Element.treeRef)} />
        </Grid>
        {dom.Element.children !== undefined &&
        Object.keys(dom.Element.children[0])[0] !== "textContent"
          ? dom.Element.children.map((dom) => renderTree(dom, true))
          : null}
      </div>
    );
  };

  const deleteFromState = useCallback((targetId) => {
    console.log(targetId);
    setDom(
      produce((draft) => {
        deleteNode(draft, targetId);
      })
    );
  }, []);

  function deleteNode(node, targetId, parent) {
    console.log(node);
    const keys = Object.keys(node);
    const key = keys[0];
    if (node[key].treeRef === targetId) {
      console.log(parent.Element.children);
      let newArr = parent.Element.children.filter(
        (child) => child.Element.treeRef !== targetId
      );
      parent.Element.children = newArr;
    } else {
      if (Array.isArray(node[key].children) && node[key].children.length > 0) {
        node[key].children.forEach((child) =>
          deleteNode(child, targetId, node)
        );
      }
    }
  }

  return (
    <div onClick={() => console.log(Dom)} id="domTree">
      {renderTree(Dom)}
    </div>
  );
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

// const changeDom = useCallback(() => {
//   setDom(
//     produce((draft) => {
//       draft.Element.props.id = "hi";
//     })
//   );
// }, []);
