import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from './components/Navbar';
import About from './components/About.jsx';
import Applications from './components/Applications.jsx';
import Media from './components/Media.jsx';
import './App.css';
import Contact from './components/Contact.jsx';

function App() {
  let [currentSection, setCurrentSection] = useState('About');

  if (currentSection === 'About') {
    return (
      <>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
        >
          <div
            className="aboutBackground"
            style={{ filter: 'brightness(50%)' }}
          ></div>
        </ReactCSSTransitionGroup>
        <Navbar setCurrentSection={setCurrentSection} />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
        >
          <About />
        </ReactCSSTransitionGroup>
      </>
    );
  } else if (currentSection === 'Applications') {
    return (
      <div>
        <Navbar setCurrentSection={setCurrentSection} />
        <Applications />
      </div>
    );
  } else if (currentSection === 'Media') {
    return (
      <div>
        <Navbar setCurrentSection={setCurrentSection} />
        <Media />
      </div>
    );
  } else if (currentSection === 'Contact') {
    return (
      <div>
        <Navbar setCurrentSection={setCurrentSection} />
        <Contact />
      </div>
    );
  }
}

export default App;
