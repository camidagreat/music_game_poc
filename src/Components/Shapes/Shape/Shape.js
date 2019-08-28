import React from 'react';

import './Shape.scss'
import PlayButton from '../../PlayButton/PlayButton.js'

export default class Shape extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {
    let selectedClass = ''
    if (this.props.id === this.props.selected) {
      selectedClass = 'selected-shape'
      let audio = document.getElementById(`audio-${this.props.id}`)
      audio.play();
    }

    return (
      <div id={this.props.id} ref={this.props.id} className={ `${this.props.shape} ${selectedClass}`} onClick={(e) => this.handleSelect(e)}>
        <img className={`${this.props.shape} ${selectedClass}`} src={this.props.shapeImage}></img>
        <PlayButton selected={this.props.selected} shapeId={this.props.id} />
        <audio id={`audio-${this.props.id}`} src={this.props.audio}></audio>
      </div>
    );
  }
}
