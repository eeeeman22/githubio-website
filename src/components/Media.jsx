import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { video_data } from '../application_data';
const Media = () => (
  <div className="sectionContainer">
    <h1>Media</h1>
    {video_data.map(video => {
      return (
        <div style={{ textAlign: 'left' }}>
          <div style={{ height: '40px' }}></div>
          {video.composer}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              paddingTop: '56.25%'
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                border: '0'
              }}
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {video.performers}
          {video.info
            ? video.info.split('\n').map(line => <div>{line}</div>)
            : ''}
        </div>
      );
    })}
  </div>
);

export default Media;
