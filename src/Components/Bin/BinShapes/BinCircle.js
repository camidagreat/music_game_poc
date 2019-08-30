import React from 'react';

export default class BinCircle extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let img = <img alt="Circle bin container" className='circle' src={this.props.shapeImage}></img>
    if (this.props.selected.includes('circle')) {
      img = <img alt="Circle bin container" className='circle' src={this.props.shapeImageHighlighted}></img>
    }

    return (
      <div className='circle-bin' id={this.props.id} onClick={(e) => this.handleSelect(e)}>
        {img}
      </div>
    );
  }
}
