import React from "react";
import PreviousNextNavigator from './PreviousNextNavigator'

export default ({props}) => (
  <div className='center'>
    <h1>{props.title}</h1>
    <h5>{props.date}</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt eros et libero rutrum, eu dapibus lacus hendrerit. Nam tortor sem, fringilla a sagittis at, vestibulum vitae mi. Vivamus feugiat quam nec sodales accumsan. Fusce efficitur tortor a volutpat dictum. Fusce nec blandit nibh. Cras sed magna tortor. Cras lobortis sed nibh nec euismod. Sed suscipit facilisis justo. Sed eget orci ut risus consequat facilisis sit amet venenatis nisi. Quisque placerat, lorem ut ullamcorper blandit, libero sem dapibus orci, nec accumsan lectus metus ac nulla. Nullam a ullamcorper massa. Morbi rutrum luctus ligula, eu accumsan nisi accumsan vel. Morbi sit amet mi lorem. Suspendisse ac volutpat nulla.
    </p>
    <PreviousNextNavigator props={props} />
  </div>
);
