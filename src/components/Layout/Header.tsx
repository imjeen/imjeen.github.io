import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContent } from "@/themeContext";

import ThemeIcon from "./ThemeIcon";

import styles from "./styles.module.less";
import logo from "@/assets/images/floppy.png";

export default function LayoutHeader() {
  const [{ dark }] = useContext(ThemeContent);

  return (
    <header className={[styles.header, dark ? styles.dark : ""].join(" ")}>
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
