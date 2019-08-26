import React from 'react';
import './Square.scss'

export default class Square extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {
    let selectedClass = ''
    if (this.props.id == this.props.selected) {
      selectedClass = 'selected-shape'
    }

    return (
      <div ref={this.props.id} className={ `square ${selectedClass}`} onClick={(e) => this.handleSelect(e)}>

      </div>
    );
  }
}
