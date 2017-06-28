import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import HomesReducer from './homes_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  homes: HomesReducer
});

export default rootReducer;
