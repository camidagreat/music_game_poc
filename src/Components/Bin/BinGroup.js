import React from 'react';

import BinCircle from './BinShapes/BinCircle.js'
import BinSquare from './BinShapes/BinSquare.js'
import BinPentagon from './BinShapes/BinPentagon.js'
import BinTriangle from './BinShapes/BinTriangle.js'
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

export default class BinGroup extends React.Component {

  handleSelect(e, id) {
    this.props.handleBinSelect(e, id)
  }

  handlePlayAll() {
    this.props.handlePlayAll(this.props.locator)
  }

  handleSubmitSet() {
    this.props.handleSubmitSet(`binGroup${this.props.group}`)
  }

  render() {

    let binSubmitSuccess
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      binSubmitSuccess = <div id={`${this.props.locator}Success`} className='bin-submit-success'><i className="far fa-check-square fa-3x"></i></div>
    } else {
      binSubmitSuccess = <div id={`${this.props.locator}Success`} className='bin-submit-success'><i className="far fa-check-square fa-9x"></i></div>
    }

    return (
      <div className="bin-box">
        <div className="row">
          {binSubmitSuccess}
          <div className="col-6 p-0 mt-2">
            <BinCircle selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`circleBin${this.props.group}`}
                         ref={`circleBin${this.props.group}`}
                         key={`circleBin${this.props.group}`}
                         shapeImage={CircleBin}
                         shapeImageHighlighted={CircleBinHighlighted}/>
            <BinSquare selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`squareBin${this.props.group}`}
                         ref={`squareBin${this.props.group}`}
                         key={`squareBin${this.props.group}`}
                         shapeImage={SquareBin}
                         shapeImageHighlighted={SquareBinHighlighted}/>


          </div>
          <div className="col-6 p-0">
            <BinTriangle selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`triangleBin${this.props.group}`}
                         ref={`triangleBin${this.props.group}`}
                         key={`triangleBin${this.props.group}`}
                         shapeImage={TriangleBin}
                         shapeImageHighlighted={TriangleBinHighlighted}/>
            <BinPentagon selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`pentagonBin${this.props.group}`}
                         ref={`pentagonBin${this.props.group}`}
                         key={`pentagonBin${this.props.group}`}
                         shapeImage={PentagonBin}
                         shapeImageHighlighted={PentagonBinHighlighted}/>

          </div>
          <div className='row justify-content-center w-100 pl-3 mt-1'>
            <div className='all-play-button'><PlayAllButton playing={this.props.playing} handlePlayAll={() => this.handlePlayAll()} /></div>
            <SubmitSetButton handleSubmitSet={() => this.handleSubmitSet()} />
          </div>
        </div>
      </div>
    );
  }
}
