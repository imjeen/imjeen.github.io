import React from "react";
import { Router, Route, /* HashRouter */ } from "react-router-dom";
import "@/styles.module.less";

import { ThemeProvider } from "@/themeContext";

import Layout from "@/components/Layout";
import HomePage from "@/containers/Home";
import NotFound from "@/containers/Other/NotFound";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <>
      <ThemeProvider>
        <Router history={history}>
          {/* <HashRouter> */}
          <Layout>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
          </Layout>
          {/* </HashRouter> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;