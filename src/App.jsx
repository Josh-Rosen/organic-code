import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Content, Footer } from './components/layout';
import { Home, NotFound } from './components/pages';
import blogLinkList from './components/pages/blog/blogLinkInfo';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            {blogLinkList.map((blogLink) => (
              <Route
                key={blogLink.key}
                path={blogLink.path}
                element={<blogLink.component data={blogLink} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
