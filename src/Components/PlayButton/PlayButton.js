import React from 'react';

export default function PlayButton(props) {

  let button
  if (props.selected === props.shapeId ) {
    button = <i className="fa fa-pause"></i>
  } else {
    button = <i className="fa fa-play"></i>
  }
  
  return (
    <div className='play-button'>
      {button}
    </div>
  );
  
}
