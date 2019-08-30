import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import SubmitGroup from '../../Assets/SubmitGroup.png'

export default class InfoModal3 extends React.Component {

  onHide() {
    this.props.handleButtonClick('close', 'showModal3', 3)
  }

  onNext() {
    this.props.handleButtonClick('next', 'showModal3', 3)
  }

  render() {

    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className='w-100'>
            <div className='d-flex flex-wrap justify-content-around'>
              <h5>Listen</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Place</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Build a Track</h5>
              <i className="fas fa-arrow-right"></i>
              <h5 className="text-success">Submit</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='info-modal-content my-5'>
            <h4 className='text-center mb-4'>Then submit your group!</h4>
            <div className='row justify-content-center'>
              <img src={SubmitGroup} className='w-25 d-block mx-auto border' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.onHide()}>Let's go!</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
