import React from 'react';
import { Link, Route } from 'react-router-dom';

class HomeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleHome(this.props.homeId);
  }

  render () {
    const { }
  }
}
