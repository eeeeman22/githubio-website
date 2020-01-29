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
      <h1>hi</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            backgroundImage: `url(/images/jtree.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        ></div>
      </div>
    </ReactCSSTransitionGroup>
  </div>
);

export default Contact;
