import React from 'react';

export default function BinShape(props) {

  const handleSelect = (e) => {
    props.handleSelect(e, props.id)
  }

  let img = <img alt={`${props.shape} bin container`} className={props.shape} src={props.shapeImage}></img>
  if (props.selected.includes(props.shape)) {
    img = <img alt={`${props.shape} bin container`} className={props.shape} src={props.shapeImageHighlighted}></img>
  }

  return (
    <div className={`${props.shape}-bin`} id={props.id} onClick={(e) => handleSelect(e)}>
      {img}
    </div>
  );
}
