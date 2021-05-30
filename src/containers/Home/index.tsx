import React, { useContext } from "react";
import styles from "./styles.module.less";

import { ThemeContent } from "@/themeContext";

export default function Home() {
  const [{ dark }] = useContext(ThemeContent);
  return (
    <>
      <main
        className={["ui-section", styles.main, dark ? styles.dark : ""].join(
          " "
        )}
      >
        <div className={styles.elevator}>
          <h1>Hey, I'm PJ. </h1>
          <p>
            I'm a full stack software developer creating{" "}
            <a
              href="https://github.com/imjeen"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </a>{" "}
            projects and writing about modern JavaScript, Node.js, and
            development.
          </p>
        </div>
        <div className={["theme-card", styles.card].join(" ")}>
          <img src="https://via.placeholder.com/150" alt="SELFIRE" />
          <h3>Email Newsletter</h3>
          <p>
            I write tutorials. Get an update when something new comes out by
            signing up below!
          </p>
          <a className={styles.button} href="#">
            Subscribe
          </a>
        </div>
      </main>
    </>
  );
}
