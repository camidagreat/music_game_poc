import React from 'react';

export default class Triangle extends React.Component {

  render() {
      let button
      if (this.props.selected === this.props.shapeId ) {
        button = <i className="fa fa-pause ml-2 mt-2"></i>
      } else {
        button = <i className="fa fa-play ml-2 mt-2 pl-1"></i>
      }
    return (
      <div className={`play-button`}>
        {button}
      </div>
    );
  }
}
