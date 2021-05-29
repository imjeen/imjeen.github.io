import React from "react";
import styles from "./styles.module.less";

import LayoutHeader from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
}
