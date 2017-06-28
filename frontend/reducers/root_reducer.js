import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import HostsReducer from './hosts_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  hosts: HostsReducer
});

export default rootReducer;
