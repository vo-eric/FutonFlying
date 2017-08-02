import { connect } from 'react-redux';
import Dropdown from './dropdown';
import { fetchSingleHost } from '../../actions/host_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    dropdownIsOpen: state.dropdown.dropdownIsOpen,
    state
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleHost: (id) => dispatch(fetchSingleHost(id)),
    closeDropdown: () => dispatch(closeDropdown())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
