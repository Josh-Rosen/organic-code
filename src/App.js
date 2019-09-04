import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Content, Footer } from './components/layout';
import { About, Home, Blog, Projects, Contact } from './components/pages';
import HelloWorld from './components/pages/blog/HelloWorld';

import './App.css';

const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          <Route exact path="/blog/" component={Blog} />
          <Route exact path="/blog/HelloWorld" component={HelloWorld} />
          <Route path="/projects/" component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Content>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
