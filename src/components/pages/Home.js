import React from "react";
import BlogList from "./BlogList";

export default () => {
  return (
    <div>
      <div className='center center-content'>
        <h1>Hi, my name's Josh</h1>
        <h3 className='homeStubTitle'>
          I'm a <span className="jiggle">Software Engineer</span>
        </h3>
        <BlogList/>
      </div>
    </div>
  )
}
