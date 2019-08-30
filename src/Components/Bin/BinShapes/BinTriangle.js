import React from 'react';

export default class BinTriangle extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let img = <img className='triangle'  alt="Triangle bin container" src={this.props.shapeImage}></img>
    if (this.props.selected.includes('triangle')) {
      img = <img className='triangle'  alt="Triangle bin container" src={this.props.shapeImageHighlighted}></img>
    }

    return (
      <div className='triangle-bin' id={this.props.id} onClick={(e) => this.handleSelect(e)}>
        {img}
      </div>
    );
  }
}
