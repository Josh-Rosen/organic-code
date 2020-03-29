import React from 'react';
import { NavLink } from "react-router-dom";
import { blogLinkList } from './blogLinkInfo'

export default ({props}) => {
  const currentIndex = blogLinkList.findIndex(link => link.key === props.key);
  const previousPath = blogLinkList[currentIndex - 1]
  const nextPath = blogLinkList[currentIndex + 1]

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      { previousPath && <NavLink to={previousPath.path} className="linkStyle">
          <div>{`${'<-'} Previous`}</div>
        </NavLink>
      }
      { !previousPath && <div>{`${'<-'} Previous`}</div>}

      { nextPath && <NavLink to={nextPath.path} className="linkStyle">
          <div>{`Next ${'->'}`}</div>
        </NavLink>
      }
      { !nextPath && <div>{`Next ${'->'}`}</div>}
    </div>
  )
}
