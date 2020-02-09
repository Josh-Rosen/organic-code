import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className='center'>
      <div className="articleList">
        <article className="articleLink">
          <NavLink
            to="/blog/HelloWorld"
            className="linkStyle"
          >
            <div className="articleTitle">
              <h2>Hello World</h2>
              <small>12-14-1991</small>
              <p>Hello World Description</p>
            </div>
          </NavLink>
        </article>
      </div>
    </div>
  )
}
