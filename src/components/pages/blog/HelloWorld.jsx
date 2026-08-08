import React from 'react';
import Header from './Header';
import Footer from './Footer';

function HelloWorld({ data }) {
  return (
    <article className="blogpost">
      <Header props={data} />
      <h2>
        <span className="green" aria-hidden="true">
          #
        </span>{' '}
        Introduction
      </h2>
      <div className="blogPostSection">
        <p>
          Welcome to my Blog.
        </p>
        <p>
          My goal with this blog is to write about my learnings, experiences, and exlporations with Software Engineering.
        </p>
          My hope with this blog is that someone will eventually find something useful from it.
        <p>
        </p>
      </div>
      <h2>
        <span className="green" aria-hidden="true">
          #
        </span>{' '}
        The End
      </h2>
      <div className="blogPostSection">
        <p>
          Thank you for reading. More to come soon.
        </p>
      </div>
      <Footer />
    </article>
  );
}

export default HelloWorld;
