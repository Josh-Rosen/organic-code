import React from "react";
import Post from './Post';
import {blogLinkList} from './blog/blogLinkInfo';

export default () => {
  return (
    <div className='center'>
      <div className="articleList">
        {blogLinkList.map(linkInfo => <Post {...linkInfo} />)}
      </div>
    </div>
  )
}
