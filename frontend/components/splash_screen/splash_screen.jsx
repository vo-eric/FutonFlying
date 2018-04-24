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
              Stay With Locals and Meet Fellow Travelers
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
        <p className="tgp-header">Top Futonflying Destinations</p>
        
        <div className='the-grand-piece'>
          <div className='tgp-city p1'>
            <img 
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/losangeles.jpg" 
              alt="Los Angeles"/>
            <div className="tgp-text">
              Los Angeles
            </div>
          </div>

          <div className='tgp-city p2'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/copenhagen.jpg"
              alt="Copenhagen"
            />
            <div className='tgp-text'>
              Copenhagen
            </div>
          </div>

          <div className='tgp-city p3'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/vienna.jpg"
              alt="Vienna"
            />
            <div className='tgp-text'>
              Vienna
            </div>
          </div>

          <div className='tgp-city p4'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/lyon.jpg"
              alt="Lyon"
            />
            <div className='tgp-text'>
              Lyon
            </div>
          </div>


          <div className='tgp-city p5'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/halong.jpeg"
              alt="Ha Long Bay"
            />
            <div className='tgp-text'>
              Ha Long Bay
            </div>
          </div>
          <div className='tgp-city p6'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/london.jpg"
              alt="London"
            />
            <div className='tgp-text'>
              London
            </div>
          </div>

          <div className='tgp-city p7'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/newyork.jpg"
              alt="New York"
            />
            <div className='tgp-text'>
              New York
            </div>
          </div>

          <div className='tgp-city p8'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/berlin.jpg"
              alt="Berlin"
            />
            <div className='tgp-text'>
              Berlin
            </div>
          </div>

          <div className='tgp-city p9'>
            <img
              src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/porto.jpg"
              alt="Porto"
            />
            <div className='tgp-text'>
              Porto
            </div>
          </div>

          <div className='tgp-city p10'>
              <img
                src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/rome.jpg"
                alt="Rome"
              />
            <div className='tgp-text'>
              Rome
            </div>
          </div>

          <div className='tgp-city p11'>
              <img
                src="https://s3.us-east-2.amazonaws.com/futon-flying-pro/budapest.jpg"
                alt="Budapest"
              />
            <div className='tgp-text'>
              Budapest
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default SplashScreen;


