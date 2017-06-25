import { connect } from 'react-redux';
import SplashScreen from './splash_screen';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
