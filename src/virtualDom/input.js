import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Icon } from "@mui/material";
import "../style/input.css";

export default function Input(props) {
  const { Dom, deleteNodeFromState, addNodeToState, findParentNode } = props;

  const renderTree = (dom, isChild) => {
    const { Element } = dom;
    const { tagName, children, treeRef } = Element;

    const offset = () => (isChild ? { marginLeft: "10px" } : { marginLeft: "-2px" });

    const hasChildren = (function () {
      if (children === undefined || children.length === 0) return false;
      else if (Object.keys(children[0])[0] !== "textContent") return true;
    })(dom);

    const icons = {
      delete: (ref) => (
        <Icon
          baseClassName="material-symbols-sharp"
          onClick={() => deleteNodeFromState(ref)}
        >
          remove
        </Icon>
      ),
      add: (ref) => (
        <Icon baseClassName="material-symbols-sharp" onClick={() => addNodeToState(ref)}>
          add
        </Icon>
      ),
    };

    return (
      <div className="node" style={offset()} key={treeRef}>
        <div style={offset()} className={`nodeContent ${hasChildren ? "parent" : ""}`}>
          <p style={offset()}> {tagName}</p>
          {tagName === "div" || tagName === "main" ? icons.add(treeRef) : null}
          {tagName !== "main" ? icons.delete(treeRef) : null}
        </div>
        {hasChildren ? children.map((dom) => renderTree(dom, true)) : null}
      </div>
    );
  };

  return <div id="domTree">{renderTree(Dom)}</div>;
}
