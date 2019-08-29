import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className='center'>
      <h1>Software Blog</h1>
      <div className="articleList">
        <div className="separator" />
        <article className="article-container">
          <NavLink
            to="/blog/HelloWorld"
            className="linkStyle"
          >
            <div className="articleTitle">
              <h2>Hello World</h2>
              <small className="blog-date">12-14-1991</small>
            </div>
          </NavLink>
        </article>
        <div className="separator" />
      </div>
    </div>
  )
}
