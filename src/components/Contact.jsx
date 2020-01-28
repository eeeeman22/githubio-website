import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Contact = () => (
  <div className="sectionContainer">
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <h1>Contact</h1>
      <p>write links here</p>
    </ReactCSSTransitionGroup>
  </div>
);

export default Contact;
