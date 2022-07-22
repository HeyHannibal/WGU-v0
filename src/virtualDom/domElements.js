import uniqid from "uniqid";

export default function Element(tag, prop, child) {
  const tagName = tag;
  const treeRef = uniqid();
  let props = { ...prop };
  props.key = uniqid();
  const children = child
    ? [...child]
    : tagName === "p"
    ? [{ textContent: "Hello World" }]
    : [];

  return { Element: { tagName, treeRef, props, children } };
}

// const numbers = {
//   numA: 5,
//   numB: 10,

//   sum: function () {
//     console.log(this);

//     function calc() {
//       console.log(this);
//       return this.numA + this.numB;
//     }
//     return calc();
//   },
// };
// numbers.sum();
