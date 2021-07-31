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
  {
    emoji: "🦚",
    title: "imjeen/flutter_uikit",
    repo: "https://github.com/imjeen/flutter_uikit",
    demo: "https://imjeen.github.io/flutter_uikit/",
  },
];

const NOTIONS = [
  {
    url: "https://www.notion.so/Certificates-for-localhost-64f4cc03767a45b0a1088a20772d8da4",
    title: "Certificates for localhost",
  },
  {
    url: "https://www.notion.so/7250645aa4bd4a89bf182611ef036b35",
    title: "模块化、命名空间与组件化",
  },
  {
    url: "https://www.notion.so/Git-102c8241af224b1e9eaaa1eb05323830",
    title: "Git 提交规范与自动化",
  },
  {
    url: "https://www.notion.so/Promise-Generator-async-await-735d0ee1d50444228fa43ca27fb965b1",
    title: "Promise, Generator 和 async/await",
  },
  {
    url: "https://www.notion.so/Docker-CI-CD-15b4c52bb25d440692548247132e31f6",
    title: "使用 Docker 构建 CI/CD",
  },
  // {
  //   url: "",
  //   title: "",
  // },
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
        <aside className={styles.elevator}>
          <h1>Hey, I'm PJ. </h1>
          <p>
            I'm a beginner of the full stack software developer creating{" "}
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
        </aside>
        <header className={["theme-card", styles.card].join(" ")}>
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
        </header>

        <section className={styles.latest}>
          <h2>Latest Open Source</h2>
          {LISTS.map(({ emoji, title, repo, demo }, index) => (
            <>
              <nav className={styles.nav} key={index.toString()}>
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

        <section className={styles.notions}>
          <h2>Articles</h2>

          {NOTIONS.map(({ url, title }, index) => (
            <>
              <nav key={index.toString()}>
                <h3>
                  <a href={url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>
                <strong className={styles.new}></strong>
              </nav>
            </>
          ))}
        </section>
      </main>
    </>
  );
}
