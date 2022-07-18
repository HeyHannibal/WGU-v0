import { useState } from "react";

export default function Input() {
  const [virtualDom, setVirtualDom] = useState({
    div: {
      id: "output",
      children: {
        h1: {
          textContent: "Hello World",
        },
        p: {
          textContent: "How you doin",
        },
        div: {
          children: {
            a: {
              textContent: "visit my cool website",
            },
          },
        },
      },
    },
  });

  
}
