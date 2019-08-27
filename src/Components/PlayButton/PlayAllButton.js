import React from 'react';

export default class PlayAllButton extends React.Component {

  handlePlayAll() {
    this.props.handlePlayAll()
  }

  render() {
      let button
      if (this.props.playing === true ) {
        button = <i className="fa fa-pause ml-2 mt-2"></i>
      } else {
        button = <i className="fa fa-play ml-2 mt-2 pl-1"></i>
      }

    return (
      <div className={`play-button`} onClick={() => this.handlePlayAll()}>
        {button}
      </div>
    );
  }
}
