import React from "react";
import { Router, Route, /* HashRouter, */ Switch } from "react-router-dom";
import "@/styles.module.less";

import { ThemeProvider } from "@/themeContext";

import Layout from "@/components/Layout";
import HomePage from "@/containers/Home";
import AboutPage from "@/containers/About";
import NotFound from "@/containers/Other/NotFound";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <>
      <ThemeProvider>
        <Router history={history}>
          {/* <HashRouter> */}
          <Switch>
            <Layout>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
              {/* <Route path="*">
                <NotFound />
              </Route> */}
            </Layout>
          </Switch>
          {/* </HashRouter> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
