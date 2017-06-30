import { connect } from 'react-redux';
import Search from './search';
import HostsIndex from '../hosts/host_index_container';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return {
    hosts: Object.keys(state.hosts).map(id => state.hosts[id])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
