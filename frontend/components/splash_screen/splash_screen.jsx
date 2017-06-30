import React from 'react';
import { Route, Link } from 'react-router-dom';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='splash'>
        <div className='tgp-header'>
          Top Futonflying Destinations
        </div>
        <br/>
        <br/>

        <div className='the-grand-piece'>

          <div className='tgp-top'>
            <div className='tgp-top-left'>
              <div className='tgp-top-left-1'>
                <div className='p1'>
                  <div className='tgp-text'>
                  </div>
                  <img
                    src={window.images.losangeles}
                    className='splash-img'
                  />
                </div>

                <div className='p2'>
                  <img
                    src={window.images.copenhagen}
                    className='splash-img'
                  />
                  <div className='tgp-text'>

                  </div>
                </div>
              </div>


              <div className='tgp-top-left-2'>
                <div className='p3'>
                  <img
                    src={window.images.lyon}
                    className='splash-img'
                  />
                  <div className='tgp-text'>

                  </div>
                </div>

                <div className='p4'>
                  <img
                    src={window.images.vienna}
                    className='splash-img'
                  />
                  <div className='tgp-text'>

                  </div>
                </div>
              </div>
            </div>


            <div className='tgp-top-right'>
              <div className='tgp-top-right-1'>
                <div className='p5'>
                  <img
                    src={window.images.halong}
                    className='splash-img'
                  />
                  <div className='tgp-text'>

                  </div>
                </div>
              </div>

              <div className='tgp-top-right-2'>
                <div className='tgp-top-right-2-left'>
                  <div className='p6'>
                    <img
                      src={window.images.london}
                      className='splash-img'
                    />
                    <div className='tgp-text'>

                    </div>
                  </div>
                </div>

                <div className='tgp-top-right-2-right'>
                  <div className='p7'>
                    <img
                      src={window.images.newyork}
                      className='splash-img'
                    />
                    <div className='tgp-text'>

                    </div>
                  </div>


                  <div className='p8'>
                    <img
                      src={window.images.berlin}
                      className='splash-img'
                    />
                    <div className='tgp-text'>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='tgp-bottom'>
            <div className='tgp-bottom-left'>
              <div className='p9'>
                <img
                  src={window.images.porto}
                  className='splash-img'
                />
                <div className='tgp-text'>

                </div>
              </div>
            </div>

            <div className='tgp-bottom-right'>

              <div className='p10'>
                <div className='tgp-text'>
                  <img
                    src={window.images.madrid}
                    className='splash-img'
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SplashScreen;



// <div className='p11'>
//   <div className='other-destinations'>
//     Top Futon Flying Destinations
//   </div>
// </div>
