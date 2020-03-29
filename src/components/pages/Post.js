import React from "react";
import { NavLink } from "react-router-dom";

export default ({title, date, description, path}) => {
  return (
    <article className="articleLink">
      <div className='top-right-vertical-border' />
      <div className='top-right-horizontal-border' />
      <div className='top-left-vertical-border' />
      <div className='top-left-horizontal-border' />
      <div className='bottom-right-vertical-border' />
      <div className='bottom-right-horizontal-border' />
      <div className='bottom-left-vertical-border' />
      <div className='bottom-left-horizontal-border' />
      <NavLink
        to={path}
        className="linkStyle"
      >
        <div className="articleTitle">
          <h2>{title}</h2>
          <small>{date}</small>
          <p>{description}</p>
        </div>
      </NavLink>
    </article>
  )
}
