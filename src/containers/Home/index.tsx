import React, { useContext } from "react";
import styles from "./styles.module.less";

import { ThemeContent } from "@/themeContext";

const LISTS = [
  {
    emoji: "🐳",
    title: "PersonalPhotoStudio/PhotoStudio",
    repo: "https://github.com/PersonalPhotoStudio/PhotoStudio",
    demo: "https://personalphotostudio.github.io/PhotoStudio/",
  },
  {
    emoji: "⚛️",
    title: "imjeen/rc-tricks",
    repo: "https://github.com/imjeen/rc-tricks",
    demo: "https://imjeen.github.io/rc-tricks/",
  },
  {
    emoji: "📸",
    title: "grandFilter/iFilter",
    repo: "https://github.com/grandFilter/iFilter",
    demo: "https://grandfilter.github.io/iFilter",
  },
  {
    emoji: "🧬",
    title: "imjeen/gl",
    repo: "https://github.com/imjeen/gl",
    demo: "https://imjeen.github.io/gl/",
  },
  
  
];

export default function Home() {
  const [{ dark }] = useContext(ThemeContent);
  return (
    <>
      <main
        className={["ui-section", styles.main, dark ? styles.dark : ""].join(
          " "
        )}
      >
        <section className={styles.elevator}>
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
            projects and writing about modern JavaScript / Typescript, Node.js,
            and Flutter.
          </p>
        </section>
        <section className={["theme-card", styles.card].join(" ")}>
          <img
            src="https://avatars.githubusercontent.com/u/4100582"
            alt="SELFIE"
          />
          <h3>PJ.ONE</h3>
          <p>
            I sometimes push the codes. Get an update when something new comes
            out by following me below!
          </p>
          <a
            className={styles.button}
            href="https://github.com/imjeen"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </section>
        <section className={styles.latest}>
          <h2>Latest Open Source</h2>

          {LISTS.map(({ emoji, title, repo, demo }) => (
            <>
              <nav className={styles.nav}>
                <h3>
                  {emoji}
                  <a href={repo} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>
                <strong className={styles.new}>
                  <a
                    className={styles.button}
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </strong>
              </nav>
            </>
          ))}
        </section>
      </main>
    </>
  );
}
