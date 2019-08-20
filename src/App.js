import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header, NavBar, Content, Footer } from './components/layout';
import { About, Home, Blog, Projects, Contact } from './components/pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Content>
          <Route path="/" exact component={Home} />
          <Route path="/blog/" component={Blog} />
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
