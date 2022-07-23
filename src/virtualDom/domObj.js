import uniqid from "uniqid";
export let vrDom = {
  Element: {
    treeRef: uniqid(),
    tagName: "div",
    props: {
      key: uniqid(),
      id: "Output",
    },
    children: [
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
      //           tagName: "h2",
      //           props: {
      //             key: uniqid(),
      //           },
      //         },
      //       },
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
    ],
  },
};
