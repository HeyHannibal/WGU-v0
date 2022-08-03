import uniqid from "uniqid";

export default function Element(tag, prop, child, styling) {
  const tagName = tag;
  const treeRef = uniqid();
  let props = { ...prop };
  props.key = uniqid();
  let children;
  let style;

  if (tagName === "p") {
    children = [{ textContent: "Hello World" }];
    style = styling ? styling : {};
  }
  if (tagName === "div") {
    children = child ? [...child] : [];
    style = styling ? styling : { minHeight: "30px", minWidth: "30px" };
  }
  return { Element: { tagName, treeRef, props, children, style } };
}
