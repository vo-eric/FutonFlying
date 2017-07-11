import React from 'react';
import ReactDOM from 'react-dom';
import BookingsFormContainer from '../booking/bookings_form_container';
import { CSSTransitionGroup } from 'react-transition-group';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchSingleHost(this.props.hosts.id)
  // }

  render () {
    if (this.props.dropdownIsOpen) {
      return (
        <div className="dropdown">
          <CSSTransitionGroup
            transitionName="dropdown"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <BookingsFormContainer />
          </CSSTransitionGroup>
        </div>
      );
    } else {
      return <div className="dropdown-not-active"></div>;
    }
  }
}

export default Dropdown;
