import React from 'react';
import Post from './Post';
import blogLinkList from './blog/posts';
import styles from './BlogList.module.css';

function BlogList() {
  return (
    <div className="center">
      <div className={styles.list}>
        {blogLinkList.map((linkInfo) => (
          <Post key={linkInfo.key} linkInfo={linkInfo} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
