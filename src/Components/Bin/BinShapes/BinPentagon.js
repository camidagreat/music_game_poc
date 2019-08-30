import React from 'react';

export default class BinPentagon extends React.Component {

  handleSelect(e) {
    this.props.handleSelect(e, this.props.id)
  }

  render() {

    let img = <img className='pentagon'  alt="Pentagon bin container" src={this.props.shapeImage}></img>
    if (this.props.selected.includes('pentagon')) {
      img = <img className='pentagon'  alt="Pentagon bin container" src={this.props.shapeImageHighlighted}></img>
    }

    return (
      <div className='pentagon-bin' id={this.props.id} onClick={(e) => this.handleSelect(e)}>
        {img}
      </div>
    );
  }
}
