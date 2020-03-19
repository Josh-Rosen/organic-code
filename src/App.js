import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Content, Footer } from './components/layout';
import { Home } from './components/pages';
import HelloWorld from './components/pages/blog/HelloWorld';

import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          <Route exact path="/blog/HelloWorld" component={HelloWorld} />
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
