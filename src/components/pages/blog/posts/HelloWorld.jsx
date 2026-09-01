import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from '../post.module.css';

export const meta = {
  title: 'Hello World',
  date: 'Monday, August 31, 2026',
  isoDate: '2026-08-31',
  description: 'My First Post',
  path: '/HelloWorld',
};

function HelloWorld() {
  return (
    <article className={styles.blogpost}>
      <Header props={meta} />
      <h2>
        <span className={styles.hash} aria-hidden="true">
          #
        </span>{' '}
        Introduction
      </h2>
      <div className={styles.section}>
        <p>
          Welcome to my blog.
        </p>
        <p>
          My goal is to write about my learnings, experiences, and explorations with Software Engineering.
        </p>
          My hope is that someone eventually gains something from these writings.
        <p>
        </p>
      </div>
      <h2>
        <span className={styles.hash} aria-hidden="true">
          #
        </span>{' '}
        The End
      </h2>
      <div className={styles.section}>
        <p>
          Thank you for reading. More to come soon.
        </p>
      </div>
      <Footer />
    </article>
  );
}

export default HelloWorld;
