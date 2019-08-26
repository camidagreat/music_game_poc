import React from 'react';

export default class BinPentagon extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let highlightedClass = ''
    if (this.props.selected.includes('pentagon')) {
      highlightedClass = 'highlighted-pentagon-bin highlighted-pentagon-top-bin:before'
    }

    return (
      <div className={`bin-pentagon ${highlightedClass}`}
           id={this.props.id}
           onClick={(e) => this.handleSelect(e)}>
      </div>
    );
  }
}
