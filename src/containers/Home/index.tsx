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
            projects and writing about modern JavaScript / Typescript, Node.js, and Flutter.
          </p>
        </div>
        <div className={["theme-card", styles.card].join(" ")}>
          <img
            src="https://avatars.githubusercontent.com/u/4100582"
            alt="SELFIE"
          />
          <h3>PJ.ONE</h3>
          <p>
            I sometimes push the codes. Get an update when something new comes out by
            following me below!
          </p>
          <a
            className={styles.button}
            href="https://github.com/imjeen"
            target="_blank"
            rel="noreferrer" 
          >
            Github
          </a>
        </div>
      </main>
    </>
  );
}
