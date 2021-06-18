import React from "react";
import styles from "./styles.module.less";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>Copyright © {new Date().getFullYear()} by imjeen</p>
        <p>
          <a href="https://imjeen.github.io/notes/">notes</a>
        </p>
      </section>
    </footer>
  );
}
