import React, { useState, useEffect } from "react";

import moon from "@/assets/svg/moon.svg";
import sun from "@/assets/svg/sun.svg";

const defaultDark =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function ThemeIcon() {
  const [dark, setDark] = useState(defaultDark);
  const onToggle = () => setDark(!dark);

  useEffect(() => {
    const bodyList = document.body.classList;
    if (dark) {
      bodyList.add("theme-dark");
    } else {
      bodyList.remove("theme-dark");
    }
  }, [dark]);

  const handler = ({ matches }: { matches: boolean }) => {
    console.log(`Dark mode is ${matches ? "🌒 on" : "☀ off"}.`);
    setDark(matches);
  };

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(handler);
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeListener(handler);
    };
  }, []);

  return (
    <>
      <img onClick={onToggle} src={dark ? sun : moon} width="100%" />
    </>
  );
}
