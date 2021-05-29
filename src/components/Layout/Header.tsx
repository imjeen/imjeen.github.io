import React from "react";
import { Link } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

import styles from "./styles.module.less";

import logo from "@/assets/images/floppy.png";

export default function LayoutHeader() {
  return (
    <header className={[styles.header, 'theme-header'].join(' ')}>
      <section className={styles.section}>
        <Link className={styles.logo} to="/">
          <img src={logo} />
          <span className="logo-text"></span>
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
