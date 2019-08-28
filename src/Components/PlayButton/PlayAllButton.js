import React from 'react';

export default class PlayAllButton extends React.Component {

  handlePlayAll() {
    this.props.handlePlayAll()
  }

  render() {
      let button
      if (this.props.playing === true ) {
        button = <i className="fa fa-pause"></i>
      } else {
        button = <i className="fa fa-play"></i>
      }

    return (
      <div className={`play-button`} onClick={() => this.handlePlayAll()}>
        {button}
      </div>
    );
  }
}
