import React from "react";
import { NavLink } from "react-router-dom";
import Post from './Post';
import blogLinkInfo from './blog/blogLinkInfo';

export default () => {
  return (
    <div className='center'>
      <div className="articleList">
        {blogLinkInfo.map(Post)}
      </div>
    </div>
  )
}
