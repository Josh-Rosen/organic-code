import React from 'react';
import BlogList from './BlogList';

function Post() {
  return (
    <div>
      <div className="center center-content">
        <h1>Hi, my name&apos;s Josh</h1>
        <h3 className="homeStubTitle">
          I&apos;m a
          {' '}
          <span className="jiggle">Software Engineer</span>
        </h3>
        <BlogList />
      </div>
    </div>
  );
}

export default Post;
