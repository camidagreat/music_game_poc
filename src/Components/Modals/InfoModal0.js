import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Shape from '../../Assets/PlayTrack.png'

export default class InfoModal0 extends React.Component {

  onHide() {
    this.props.handleButtonClick('close', 'showModal0', 0)
  }

  onNext() {
    this.props.handleButtonClick('next', 'showModal0', 0)
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
            <div className='d-flex flex-wrap justify-content-around info-modal-header'>
              <h5 className="text-success">Listen</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Place</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Build a Track</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Submit</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-5 w-100">
          <div className='info-modal-content'>
            <h4 className='text-center'>Listen to the tracks</h4>
            <img src={Shape} alt='listen to track' className='w-25 d-block mx-auto' />
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
