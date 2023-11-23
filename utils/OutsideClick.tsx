import React, { useRef, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

export function useOutsideAlerter<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
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
