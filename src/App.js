import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Content, Footer } from './components/layout';
import { Home } from './components/pages';
import { HelloWorld } from './components/pages/blog';
import {blogLinkMap} from './components/pages/blog/blogLinkInfo';

import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          <Route
            exact
            path="/HelloWorld"
            render={props => <HelloWorld props={blogLinkMap.HelloWorld} {...props} />}
          />
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
