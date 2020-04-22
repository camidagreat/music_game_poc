import React from 'react';

import PlayButton from '../PlayButton/PlayButton.js'

export default class Shape extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  handleShapeBack() {
    this.props.handleShapeBack(`${this.props.id} shape-outline`, this.props.id, '')
  }

  render() {
    let selectedClass = '';
    if (this.props.id === this.props.selected) {
      selectedClass = 'selected-shape'
      let audio = document.getElementById(`audio-${this.props.id}`)
      audio.play();
    }

    let shapeOutline = <img className={`${this.props.shape} shape-outline`}
                            alt="shape outline"
                            id={`${this.props.id} shape-outline`}
                            src={this.props.shapeOutline}
                            onClick={() => this.handleShapeBack()}></img>
    if (this.props.id === this.props.selected) {
      shapeOutline = <img className={`${this.props.shape} shape-outline`}
                          alt="shape outline"
                          id={`${this.props.id} shape-outline`}
                          src={this.props.shapeOutlineHighlighted}
                          onClick={() => this.handleShapeBack()}></img>
    }

    return (
      <div>
        {shapeOutline}
        <div id={this.props.id}
             className={ `${this.props.shape} ${selectedClass}`}
             onClick={(e) => this.handleSelect(e)}
        >
          <img className={`${this.props.shape} ${selectedClass}`} alt="shape" src={this.props.shapeImage}></img>
          <PlayButton selected={this.props.selected} shapeId={this.props.id} />
          <audio id={`audio-${this.props.id}`} src={this.props.audio}></audio>
        </div>
      </div>
    );
  }
}
