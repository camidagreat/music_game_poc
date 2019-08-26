import React from 'react';
import ReactPlayer from 'react-player'

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
    }

    return (
      <div id={this.props.id} ref={this.props.id} className={ `${this.props.shape} ${selectedClass}`} onClick={(e) => this.handleSelect(e)}>
        <PlayButton selected={this.props.selected} shapeId={this.props.id} />
      </div>
    );
  }
}
