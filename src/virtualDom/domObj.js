import uniqid from "uniqid";

export let vrDom = {
  Element: {
    treeRef: uniqid(),
    tagName: "main",
    props: {
      key: uniqid(),
      id: "Output",
    },
    style: {
      // PointerEvents: "none",
    },
    children: [],
  },
};

// {
//   Element: {
//     treeRef: uniqid(),
//     tagName: "h2",
//     props: {
//       key: uniqid(),
//     },
//   },
// },
// {
//   Element: {
//     treeRef: uniqid(),
//     tagName: "h1",
//     props: {
//       key: uniqid(),
//     },
//     children: [{ textContent: "Hello World" }],
//   },
// },
// {
//   Element: {
//     treeRef: uniqid(),
//     tagName: "div",
//     children: [
//       {
//         Element: {
//           treeRef: uniqid(),
//           tagName: "p",
//           children: [{ textContent: "click On Me" }],
//           props: {
//             key: uniqid(),
//           },
//         },
//       },
//     ],
//   },
// },
//       {
//         Element: {
//           treeRef: uniqid(),
//           tagName: "h1",
//           nodeId: "2",
//           props: {
//             key: uniqid(),
//           },
//           children: [{ textContent: "Hello World" }],
//         },
//       },
//       {
//         Element: {
//           treeRef: uniqid(),
//           tagName: "div",
//           props: {
//             key: uniqid(),
//           },
//           children: [
//             {
//               Element: {
//                 treeRef: uniqid(),
//                 tagName: "h2",
//                 props: {
//                   key: uniqid(),
//                 },
//               },
//             },
//             {
//               Element: {
//                 treeRef: uniqid(),
//                 tagName: "h1",
//                 nodeId: "2",
//                 props: {
//                   key: uniqid(),
//                 },
//                 children: [{ textContent: "Hello World" }],
//               },
//             },
//           ],
//         },
//       },
//     ],
//   },
// },
