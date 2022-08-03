import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
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
      delete: (ref) => <ClearIcon onClick={() => deleteNodeFromState(ref)} />,
      add: (ref) => <AddCircleOutlineOutlinedIcon onClick={() => addNodeToState(ref)} />,
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
