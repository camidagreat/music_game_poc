import React from 'react';

export default class BinSquare extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let img = <img className='square'  alt="Square bin container" src={this.props.shapeImage}></img>
    if (this.props.selected.includes('square')) {
      img = <img className='square'  alt="Square bin container" src={this.props.shapeImageHighlighted}></img>
    }

    return (
      <div className='square-bin' id={this.props.id} onClick={(e) => this.handleSelect(e)}>
        {img}
      </div>
    );
  }
}
