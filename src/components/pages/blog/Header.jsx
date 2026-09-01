import React from 'react';
import styles from './Header.module.css';

function Header({ props }) {
  const { title, date, isoDate } = props;
  return (
    <>
      <h1>{title}</h1>
      <time className={styles.date} dateTime={isoDate}>
        {date}
      </time>
    </>
  );
}

export default Header;
