import React from 'react';

export default class BinSquare extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let highlightedClass = ''
    if (this.props.selected.includes('square')) {
      highlightedClass = 'highlighted-square-bin'
    }

    return (
      <div className={`bin-square ${highlightedClass}`}
           id={this.props.id}
           onClick={(e) => this.handleSelect(e)}>
      </div>
    );
  }
}
