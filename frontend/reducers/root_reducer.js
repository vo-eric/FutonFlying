import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import HostsReducer from './hosts_reducer';
// import FiltersReducer from './filters_reducer';
import BookingsReducer from './bookings_reducer';
import DropdownReducer from './dropdown_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  hosts: HostsReducer,
  bookings: BookingsReducer,
  dropdown: DropdownReducer
  // filters: FiltersReducer

});

export default rootReducer;
