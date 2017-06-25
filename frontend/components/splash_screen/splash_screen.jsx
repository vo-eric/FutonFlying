import React from 'react';
import { Route, Link } from 'react-router-dom';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='splash'>
        <div className='tgp-text'>
          Top Futonflying Destinations
        </div>

        <div className='the-grand-piece'>

          <div className='tgp-top'>
            <div className='tgp-top-left'>
              <div className='tgp-top-left-1'>
                <div className='p1'>
                  <div className='tgp-text'>
                    P ONE
                  </div>
                </div>

                <div className='p2'>
                  <div className='tgp-text'>
                    P TWO
                  </div>
                </div>
              </div>


              <div className='tgp-top-left-2'>
                <div className='p3'>
                  <div className='tgp-text'>
                    P THREE
                  </div>
                </div>

                <div className='p4'>
                  <div className='tgp-text'>
                    P FOUR
                  </div>
                </div>
              </div>

            </div>


            <div className='tgp-top-right'>
              <div className='tgp-top-right-1'>
                <div className='p5'>
                  <div className='tgp-text'>
                    P FIVE
                  </div>
                </div>
              </div>

              <div className='tgp-top-right-2'>
                <div className='tgp-top-right-2-left'>
                  <div className='p6'>
                    <div className='tgp-text'>
                      P SIX
                    </div>
                  </div>
                </div>
                
                <div className='tgp-top-right-2-right'>
                  <div className='p7'>
                    <div className='tgp-text'>
                      P SEVEN
                    </div>
                  </div>


                  <div className='p8'>
                    <div className='tgp-text'>
                      P EIGHT
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>

          <div className='tgp-bottom'>
            <div className='tgp-bottom-left'>
              <div className='p9'>
                <div className='tgp-text'>
                  P NINE
                </div>
              </div>
            </div>

            <div className='tgp-bottom-right'>
              <div className='p10'>
                <div className='tgp-text'>
                  P TEN
                </div>
              </div>

              <div className='p11'>
                <div className='tgp-text'>
                  Top Futon Flying Destinations
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
