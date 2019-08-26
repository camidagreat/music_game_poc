import React from 'react';

export default class BinCircle extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let highlightedClass = ''
    if (this.props.selected.includes('circle')) {
      highlightedClass = 'highlighted-circle-bin'
    }

    return (
      <div className={`bin-circle ${highlightedClass}`}
           id={this.props.id}
           onClick={(e) => this.handleSelect(e)}>
      </div>
    );
  }
}
