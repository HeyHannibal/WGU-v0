const wrappedText = (elem) => {
  return React.createElement(
    TextWrapper,
    { key: uniqid() },
    React.createElement(
      elem.tagName,
      addProps(elem),
      elem.children[0].textContent + elem.treeRef
    )
  );
};
// const hasChildren = (element) => {
//   const { children } = Element;
//   if (children === undefined || children.length === 0) return false;
//   if (children !== undefined && Object.keys(children[0])[0] !== "textContent")
//     return true;
// };
