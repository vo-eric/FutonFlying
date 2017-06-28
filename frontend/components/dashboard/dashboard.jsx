import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className='dashboard'>

        <div className='dash-user'>
          <div className='dash-user-info'>
            <div className='dash-fname'>
              {this.props.user.fname}
            </div>
          </div>
        </div>


        <div className='trips'>

          <div className='random-locations'>
            <div className='dash-text'>
              <i className="fa fa-globe icons" aria-hidden="true"></i>
              THE WORLD'S FUTONS ARE AT YOUR FINGERTIPS
            </div>

            <div className='inside-text'>
              There will be three locations here
            </div>
          </div>

          <div className='travel'>
            <div className='dash-text'>
              <i className="fa fa-plane icons" aria-hidden="true"></i>
              MY TRAVEL PLANS
            </div>

            <div className='inside-text'>
              You don't have any upcoming trips.<br/>
              This is a placeholder.
            </div>
          </div>

          <div className='upcoming-guests'>
            <div className='dash-text'>
              <i className="fa fa-home icons" aria-hidden="true"></i>
                MY UPCOMING GUESTS
            </div>

            <div className='inside-text'>
              You don't have any upcoming guests. <br/>
              This entire text portion is a placeholder
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Dashboard;
