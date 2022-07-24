import uniqid from "uniqid";

export default function Element(tag, prop, child, styling) {
  const tagName = tag;
  const treeRef = uniqid();
  let props = { ...prop };
  props.key = uniqid();
  const children = child
    ? [...child]
    : tagName === "p"
    ? [{ textContent: "Hello World" }]
    : [];
  const style = styling ? styling : {};
  return { Element: { tagName, treeRef, props, children, style } };
}
