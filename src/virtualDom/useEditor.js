import { useState, useEffect, useCallback } from "react";
import produce from "immer";

export default function useEditor(Dom, setDom, findNode, target) {
  const text = useCallback(
    (value) => {
      setDom(
        produce((draft) => {
          const nodetochange = findNode(draft, target);
          nodetochange.children[0].textContent = value;
        })
      );
    },
    [target]
  );
  return { text };
}
