import React from 'react';

export default class BinTriangle extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let highlightedClass = ''
    if (this.props.selected.includes('triangle')) {
      highlightedClass = 'highlighted-triangle-bin'
    }

    return (
      <div className={`bin-triangle ${highlightedClass}`}
           id={this.props.id}
           onClick={(e) => this.handleSelect(e)}>
      </div>
    );
  }
}
