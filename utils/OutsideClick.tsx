import React, { useRef, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export function useOutsideAlerter<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler,
  excludedRef?: React.RefObject<T>
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const el = ref?.current;
      const excludedEl = excludedRef?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      if (
        excludedEl &&
        (excludedEl === event.target ||
          excludedEl.contains(event.target as Node))
      ) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
