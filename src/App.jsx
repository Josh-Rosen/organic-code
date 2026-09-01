import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Content, Footer } from './components/layout';
import { Home, NotFound } from './components/pages';
import blogLinkList from './components/pages/blog/posts';

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            {blogLinkList.map((blogLink) => (
              <Route
                key={blogLink.key}
                path={blogLink.path}
                element={<blogLink.component />}
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
