import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function Input(props) {
  const { Dom, deleteNodeFromState, addNodeToState, findParentNode } = props;

  const renderTree = (dom, isChild) => {
    const { Element } = dom;
    const { tagName, children, treeRef } = Element;

    const offset = () => (isChild ? { marginLeft: "10px" } : { marginLeft: "-2px" });

    const hasChildren = () => {
      if (children === undefined || children.length === 0) return false;
      else if (Object.keys(children[0])[0] !== "textContent") return true;
    };

    const icons = {
      delete: (ref) => <ClearIcon onClick={() => deleteNodeFromState(ref)} />,
      add: (ref) => <AddCircleOutlineOutlinedIcon onClick={() => addNodeToState(ref)} />,
    };

    return (
      <div className="node" style={offset()} key={treeRef}>
        <div className="nodeContent">
          <p>{tagName}</p>
          {tagName !== "main" ? icons.delete(treeRef) : null}
          {tagName === "div" || tagName === "main" ? icons.add(treeRef) : null}
        </div>
        {hasChildren(dom) ? children.map((dom) => renderTree(dom, true)) : null}
      </div>
    );
  };

  return <div id="domTree">{renderTree(Dom)}</div>;
}
