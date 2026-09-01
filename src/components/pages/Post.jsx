import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Post.module.css';

function Post({ linkInfo }) {
  const { title, date, description, path } = linkInfo;
  return (
    <article className={styles.article}>
      <div className={`${styles.corner} ${styles.tl}`} />
      <div className={`${styles.corner} ${styles.tr}`} />
      <div className={`${styles.corner} ${styles.bl}`} />
      <div className={`${styles.corner} ${styles.br}`} />
      <NavLink to={path}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <small>{date}</small>
          <p>{description}</p>
        </div>
      </NavLink>
    </article>
  );
}

export default Post;
