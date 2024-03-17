import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Header, Content, Footer } from "./components/layout";
import { Home } from "./components/pages";
import {
  blogLinkList,
} from "./components/pages/blog/blogLinkInfo";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <Content>
          <Routes>
            <Route path="/" exact element={<Home />} />
              {blogLinkList.map((blogLink) => {
                return (
                  <Route
                    key={blogLink.key}
                    exact
                    path={blogLink.path}
                    element={<blogLink.component data={ blogLink } />}
                  />
                );
              })}
          </Routes>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
