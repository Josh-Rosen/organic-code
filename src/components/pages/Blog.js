import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className='center'>
      <h1>Software Blog</h1>
      <div className="articleList">
        <article className="article-container">
          <div className="articleTitle">
            <h2>Hello</h2>
            <p className="">12-14-1991</p>
            <p className="articleText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <NavLink
            to="/blog"
            className='keep-reading-link'
          >
            Keep Reading →
          </NavLink>
        </article>
        <article className="article-container">
          <div className="articleTitle">
            <h2>Hello</h2>
            <p className="">12-14-1991</p>
            <p className="articleText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <NavLink
            to="/blog"
            className='keep-reading-link'
          >
            Keep Reading →
          </NavLink>
        </article>
        <article className="article-container">
          <div className="articleTitle">
            <h2>Hello</h2>
            <p className="">12-14-1991</p>
            <p className="articleText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <NavLink
            to="/blog"
            className='keep-reading-link'
          >
            Keep Reading →
          </NavLink>
        </article>
      </div>
    </div>
  )
}
