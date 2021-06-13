import React, { useState, useEffect, useContext } from "react";

import { ThemeContent } from "@/themeContext";

import moon from "@/assets/svg/moon.svg";
import sun from "@/assets/svg/sun.svg";

export default function ThemeIcon() {
  const [{ dark: defaultDark }, setThemeContent] = useContext(ThemeContent);
  const [dark, setDark] = useState(defaultDark);
  const onToggle = () => {
    setDark(!dark);
    setThemeContent({ dark: !dark });
  };

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
    setThemeContent({ dark: matches });
  };

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(handler);
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeListener(handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <img onClick={onToggle} src={dark ? sun : moon} width="100%" alt="" />
    </>
  );
}
