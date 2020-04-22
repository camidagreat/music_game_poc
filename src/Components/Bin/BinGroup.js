import React from 'react';

import BinShape from './BinShape.jsx'
import PlayAllButton from '../PlayButton/PlayAllButton.js'
import SubmitSetButton from './SubmitSetButton.js'

import CircleBin from '../../Assets/CircleBin.png'
import SquareBin from '../../Assets/SquareBin.png'
import PentagonBin from '../../Assets/PentagonBin.png'
import TriangleBin from '../../Assets/TriangleBin.png'

import CircleBinHighlighted from '../../Assets/CircleBinHighlighted.png'
import SquareBinHighlighted from '../../Assets/SquareBinHighlighted.png'
import PentagonBinHighlighted from '../../Assets/PentagonBinHighlighted.png'
import TriangleBinHighlighted from '../../Assets/TriangleBinHighlighted.png'

import './BinGroup.scss'

export default function BinGroup(props) {

  const handleSubmitSet = () => {
    props.handleSubmitSet(`binGroup${props.group}`)
  }


  let binSubmitSuccess
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    binSubmitSuccess = <div id={`${props.locator}Success`} className='bin-submit-success'><i className="far fa-check-square fa-3x"></i></div>
  } else {
    binSubmitSuccess = <div id={`${props.locator}Success`} className='bin-submit-success'><i className="far fa-check-square fa-9x"></i></div>
  }

  return (
    <div className="bin-box">
      <div className="row">
        {binSubmitSuccess}
        <div className="col-6 p-0 mt-2">
          <BinShape  selected={props.selected}
                     handleSelect={(e, id) => props.handleBinSelect(e, id)}
                     id={`circleBin${props.group}`}
                     shapeImage={CircleBin}
                     shape='circle'
                     shapeImageHighlighted={CircleBinHighlighted}/>
          <BinShape selected={props.selected}
                    handleSelect={(e, id) => props.handleBinSelect(e, id)}
                    id={`squareBin${props.group}`}
                    shapeImage={SquareBin}
                    shape='square'
                    shapeImageHighlighted={SquareBinHighlighted}/>


        </div>
        <div className="col-6 p-0">
          <BinShape  selected={props.selected}
                     handleSelect={(e, id) => props.handleBinSelect(e, id)}
                     id={`triangleBin${props.group}`}
                     shapeImage={TriangleBin}
                     shape='triangle'
                     shapeImageHighlighted={TriangleBinHighlighted}/>
          <BinShape  selected={props.selected}
                     handleSelect={(e, id) => props.handleBinSelect(e, id)}
                     id={`pentagonBin${props.group}`}
                     shapeImage={PentagonBin}
                     shape='pentagon'
                     shapeImageHighlighted={PentagonBinHighlighted}/>

        </div>
        <div className='row justify-content-center w-100 pl-3 mt-1'>
          <div className='all-play-button'>
            <PlayAllButton playing={props.playing} handlePlayAll={() => props.handlePlayAll(props.locator)} />
          </div>
          <SubmitSetButton handleSubmitSet={() => handleSubmitSet()} />
        </div>
      </div>
    </div>
  );
}
