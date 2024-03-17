import React from "react";
import Post from "./Post";
import { blogLinkList } from "./blog/blogLinkInfo";

function BlogList() {
  return (
    <div className="center">
      <div className="articleList">
        {blogLinkList.map((linkInfo) => (
          <Post {...linkInfo} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
