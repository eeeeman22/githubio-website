import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { application_data } from '../application_data';

const Applications = () => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    <div className="applicationsListContainer">
      <h1>Applications</h1>
      <ul className="applicationsList">
        {application_data.map(app => {
          console.log(app.gif);
          return (
            <div className="applicationCard">
              <div
                style={{
                  backgroundImage: `url(${app.gif})`
                }}
                className="applicationPhoto"
              ></div>
              <a href={app.url} target="_blank">
                {app.name}
              </a>
              <p>{app.description}</p>
            </div>
          );
        })}
      </ul>
    </div>
  </ReactCSSTransitionGroup>
);

export default Applications;
