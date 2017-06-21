import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false }
  }

  render () {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal isOPen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>This is FutonFlying</h1>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true})
  }

  closeModal() {
    this.setState({ isModalClosed: false})
  }
}
