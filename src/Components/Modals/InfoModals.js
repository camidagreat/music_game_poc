import React from 'react';

import InfoModal0 from './InfoModal0.js'
import InfoModal1 from './InfoModal1.js'
import InfoModal2 from './InfoModal2.js'
import InfoModal3 from './InfoModal3.js'

export default class InfoModals extends React.Component {

  handleButtonClick(action, currentModal, number) {
    this.props.handleButtonClick(action, currentModal, number);
  }

  render() {

    return (
      <div>
        <InfoModal0 show={this.props.showModal0} handleButtonClick={(action, currentModal, number) => this.handleButtonClick(action, currentModal, number)} />
        <InfoModal1 show={this.props.showModal1} handleButtonClick={(action, currentModal, number) => this.handleButtonClick(action, currentModal, number)} />
        <InfoModal2 show={this.props.showModal2} handleButtonClick={(action, currentModal, number) => this.handleButtonClick(action, currentModal, number)} />
        <InfoModal3 show={this.props.showModal3} handleButtonClick={(action, currentModal, number) => this.handleButtonClick(action, currentModal, number)} />
      </div>
    );
  }
}
