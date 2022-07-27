import { useState, useEffect, useCallback } from "react";
import produce from "immer";

export default function useEditor(Dom, setDom, findNode, target) {
  const editText = useCallback(
    (value) => {
      setDom(
        produce((draft) => {
          const node = findNode(draft, target);
          node.children[0].textContent = value;
        })
      );
    },
    [target]
  );

  const editStyle = useCallback(
    (prop, value) => {
      setDom(
        produce((draft) => {
          const node = findNode(draft, target);
          node.style[prop] = value;
        })
      );
    },
    [target]
  );

  return { editText, editStyle };
}
