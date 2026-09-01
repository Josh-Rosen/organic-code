import React from 'react';
import BlogList from './BlogList';
import styles from './Home.module.css';

function Post() {
  return (
    <div>
      <div className="center center-content">
        <h1>Hi, my name&apos;s Josh</h1>
        <h3 className={styles.stubTitle}>I&apos;m a Software Engineer</h3>
        <BlogList />
      </div>
    </div>
  );
}

export default Post;
