import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import ShapeHighlighted from '../../Assets/TriangleBinHighlighted.png'
import Shape from '../../Assets/PlayTrack.png'


export default class InfoModal1 extends React.Component {

  onHide() {
    this.props.handleButtonClick('close', 'showModal1', 1)
  }

  onNext() {
    this.props.handleButtonClick('next', 'showModal1', 1)
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
              <h5 className="text-success">Place</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Build a Track</h5>
              <i className="fas fa-arrow-right"></i>
              <h5>Submit</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='info-modal-content my-5'>
          <h4 className='text-center mb-4'>Place the track in the group where you think it would fit</h4>
          <div className='row justify-content-center'>
            <img src={Shape} className='w-25 d-block mx-auto' />
            <i class="fas fa-arrow-right fa-4x mx-5 my-auto"></i>
            <img src={ShapeHighlighted} className='w-25 d-block mx-auto' />
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
