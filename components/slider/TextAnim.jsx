"use client";
import { useEffect, useMemo, useState } from "react";

import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Full-stack Developer", "UI/UX Designer", "App Developer"];

export default function TextAnim() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="loop-text lead">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
}
