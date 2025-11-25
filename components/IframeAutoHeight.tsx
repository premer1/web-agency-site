"use client";

import { useEffect } from "react";

export function IframeAutoHeight() {
  useEffect(() => {
    const postHeight = () => {
      const height = document.documentElement.scrollHeight;
      if (window.parent) {
        window.parent.postMessage({ type: "demoHeight", height }, "*");
      }
    };

    postHeight();

    const resizeObserver = new ResizeObserver(() => {
      postHeight();
    });
    resizeObserver.observe(document.documentElement);

    window.addEventListener("load", postHeight);
    window.addEventListener("resize", postHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", postHeight);
      window.removeEventListener("resize", postHeight);
    };
  }, []);

  return null;
}

