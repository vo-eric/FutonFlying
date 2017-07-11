import { OPEN_DROPDOWN, CLOSE_DROPDOWN} from '../actions/dropdown_actions';

const initialState = {
  dropdownIsOpen: false
}

const DropdownReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_DROPDOWN:
      return Object.assign(
        {},
        state,
        { dropdownIsOpen: true }
      );
    case CLOSE_DROPDOWN:
      return Object.assign(
        {},
        state,
        { dropdownIsOpen: false }
      );
    default:
      return state;
  }
};

export default DropdownReducer;
