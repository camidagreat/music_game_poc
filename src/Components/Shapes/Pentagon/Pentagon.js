import React from 'react';
import './Pentagon.scss'

export default class Pentagon extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {
    let selectedClass = ''
    if (this.props.id == this.props.selected) {
      selectedClass = 'selected-shape'
    }

    return (
      <div ref={this.props.id} className={ `pentagon ${selectedClass}`} onClick={(e) => this.handleSelect(e)}>

      </div>
    );
  }
}
