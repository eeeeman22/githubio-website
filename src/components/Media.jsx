import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Media = () => (
  <div className="sectionContainer">
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <h1>Media</h1>
      <p>write links here</p>
    </ReactCSSTransitionGroup>
  </div>
);

export default Media;
