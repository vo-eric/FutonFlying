import React from 'react';
import ReactDOM from 'react-dom';
import BookingsFormContainer from '../booking/bookings_form_container';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.dropdownIsOpen) {
      return (
        <div className="dropdown active">
          <BookingsFormContainer />
        </div>
      );
    } else {
      return <div className="dropdown inactive"></div>;
    }
  }
}

export default Dropdown;
