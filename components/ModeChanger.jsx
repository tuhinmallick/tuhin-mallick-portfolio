"use client";

import { useEffect } from "react";

export default function ModeChanger({ mode }) {
  useEffect(() => {
    document.body.classList.add(mode);

    return () => {
      document.body.classList.remove(mode);
    };
  }, []);

  return <></>;
}
