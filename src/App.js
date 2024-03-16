import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Content, Footer } from "./components/layout";
import { Home } from "./components/pages";
import {
  blogLinkList,
} from "./components/pages/blog/blogLinkInfo";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          {blogLinkList.map((blogLink) => {
            return (
              <Route
                key={blogLink.key}
                exact
                path={blogLink.path}
                render={(props) => (
                  <blogLink.component data={blogLink} router={props} />
                )}
              />
            );
          })}
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
