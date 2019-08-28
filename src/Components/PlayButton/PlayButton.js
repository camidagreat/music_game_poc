import React from 'react';

export default class PlayButton extends React.Component {

  render() {
      let button
      if (this.props.selected === this.props.shapeId ) {
        button = <i className="fa fa-pause"></i>
      } else {
        button = <i className="fa fa-play"></i>
      }
    return (
      <div className={`play-button`}>
        {button}
      </div>
    );
  }
}
