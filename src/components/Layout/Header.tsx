import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContent } from "@/themeContext";
import { debounce } from "@/utils";
import ThemeIcon from "./ThemeIcon";

import styles from "./styles.module.less";
import logo from "@/assets/images/floppy.png";

export default function LayoutHeader() {
  const [{ dark }] = useContext(ThemeContent);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // TODO fix
    const onScroll = debounce(() => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 200);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : "",
        dark ? styles.dark : "",
      ].join(" ")}
    >
      <section className={styles.section}>
        <Link className={styles.logo} to="/">
          <img src={logo} alt="LOGO" />
          <span className="logo-text">PJ</span>
        </Link>

        <menu className={styles.menu}>
          <Link to="/about">About</Link>
        </menu>

        <span className={styles.theme}>
          <ThemeIcon />
        </span>
      </section>
    </header>
  );
}
