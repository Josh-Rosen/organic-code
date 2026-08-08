import React from 'react';

function Header({ props }) {
  const { title, date, isoDate } = props;
  return (
    <>
      <h1>{title}</h1>
      <time className="postDate" dateTime={isoDate}>
        {date}
      </time>
    </>
  );
}

export default Header;
