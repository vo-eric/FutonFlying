import {
  OPEN_MODAL,
  CLOSE_MODAL,
  RECEIVE_COMPONENT
} from '../actions/modal_actions';

const initialState = {
  modalIsOpen: false,
  component: ''
}

const ModalReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign(
        {},
        state,
        { component: action.component, modalIsOpen: true}
      );
    case CLOSE_MODAL:
      return Object.assign(
        {},
        state,
        { component: null, modalIsOpen: false}
      );
    case RECEIVE_COMPONENT:
      return Object.assign(
        {},
        state,
        { component: action.component }
      );
    default:
      return state;
  }
};

export default ModalReducer;
