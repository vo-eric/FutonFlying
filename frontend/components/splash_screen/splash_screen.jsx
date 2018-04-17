import React from 'react';
import { Route, Link } from 'react-router-dom';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='splash'>
        <div className="welcome-overlay">
          <p className="overlay-text">
              Stay with locals and meet travelers
          </p>
          <p className="overlay-subtext">
              Share your experiences.
          </p>
        </div>

        <div className="how-it-works">
          <p className="hiw-text">
            How it Works
          </p>

          <div className="short-underline" />

          <div className="hiw-info">
            <div className="hiw-discover">
              <img src = {window.images.discover} />
              <p>Meet Amazing People</p>
              <div className="shorter-underline" />
              <p>
                Futonfliers open their homes and share their lives. Be connected.
              </p>
            </div>

            <div className="hiw-find">
              <img src = {window.images.futon} />
              <p>Find a Host</p>

              <div className="shorter-underline" />

              <p>
                Connect with hosts and confirm your stay through FutonFlying. Your stay with hosts is free!
              </p>
            </div>

          </div>
        </div>
        <div className='the-grand-piece'>
          <div className='pic p1'>
            <img
              src={window.images.losangeles}
              className='splash-img'
            />
            <span className='tgp-text'>
              Los Angeles
            </span>
          </div>

          <div className='pic p2'>
            <img
              src={window.images.copenhagen}
              className='splash-img'
            />
            <span className='tgp-text'>
              Copenhagen
            </span>
          </div>

          <div className='pic p3'>
            <img
              src={window.images.lyon}
              className='splash-img'
            />
            <span className='tgp-text'>
              Lyon
            </span>
          </div>

          <div className='pic p4'>
            <img
              src={window.images.vienna}
              className='splash-img'
            />
            <span className='tgp-text'>
              Vienna
            </span>
          </div>

          <div className='pic p5'>
            <img
              src={window.images.halong}
              className='splash-img'
            />
            <span className='tgp-text'>
              Ha Long Bay
            </span>
          </div>
          <div className='pic p6'>
            <img
              src={window.images.london}
              className='splash-img'
            />
            <span className='tgp-text'>
              London
            </span>
          </div>

          <div className='pic p7'>
            <img
              src={window.images.newyork}
              className='splash-img'
            />
            <span className='tgp-text'>
              New York
            </span>
          </div>

          <div className='pic p8'>
            <img
              src={window.images.berlin}
              className='splash-img'
            />
            <span className='tgp-text'>
              Berlin
            </span>
          </div>

          <div className='pic p9'>
            <img
              src={window.images.porto}
              className='splash-img'
            />
            <span className='tgp-text'>
              Porto
            </span>
          </div>

          <div className='pic p10'>
              <img
                src={window.images.madrid}
                className='splash-img'
              />
            <span className='tgp-text'>
              Madrid
            </span>
          </div>
        </div>
      </div>
    );
  }
  
}

export default SplashScreen;


