import { connect } from 'react-redux';
import HomeShow from './home_show';
import { fetchSingleHome } from '../../actions/chair_actions';

const mapStateToProps = (state, { match }) => {
  const homeId = match.params.homeId;
  const home = selectHome(state, match.params.homeId);
  return { homeId, home }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleHome: (id) => dispatch(fetchSingleHome),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
