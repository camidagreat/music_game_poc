import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PlayTheGroup from '../../Assets/PlayTheGroup.png'

export default class InfoModal2 extends React.Component {

  onHide() {
    this.props.handleButtonClick('close', 'showModal2', 2)
  }

  onNext() {
    this.props.handleButtonClick('next', 'showModal2', 2)
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
              <h5 className="text-success">Build a Track</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Submit</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='info-modal-content my-5'>
            <h4 className='text-center mb-4'>Listen to the tracks you've placed together to make sure they sound good</h4>
            <div className='row justify-content-center'>
              <img src={PlayTheGroup} alt="partial group of shapes" className='w-25 d-block mx-auto border' />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.onHide()}>Close</Button>
          <Button onClick={() => this.onNext()}>Next</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
