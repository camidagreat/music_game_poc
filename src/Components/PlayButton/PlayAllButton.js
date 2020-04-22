import React from 'react';

export default function PlayAllButton(props) {

  let button
  if (props.playing === true ) {
    button = <i className="fa fa-pause"></i>
  } else {
    button = <i className="fa fa-play"></i>
  }

  return (
    <div className='play-button' onClick={() => props.handlePlayAll()}>
      {button}
    </div>
  );
  
}
