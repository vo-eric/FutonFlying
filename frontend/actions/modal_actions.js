export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const RECEIVE_COMPONENT = "RECEIVE_COMPONENT";

export const openModal = (component) => ({
  type: OPEN_MODAL,
  component
});

export const closeModal = (component) => ({
  type: CLOSE_MODAL,
  component: null
});

export const receiveComponent = (component) => ({
  type: RECEIVE_COMPONENT,
  component
});
