import React from 'react';

import BinCircle from './BinShapes/BinCircle.js'
import BinSquare from './BinShapes/BinSquare.js'
import BinPentagon from './BinShapes/BinPentagon.js'
import BinTriangle from './BinShapes/BinTriangle.js'
import PlayAllButton from '../PlayButton/PlayAllButton.js'

import './BinGroup.scss'

export default class BinGroup extends React.Component {

  handleSelect(e, id) {
    this.props.handleBinSelect(e, id)
  }

  handlePlayAll() {
    this.props.handlePlayAll(this.props.locator)
  }

  render() {

    return (
      <div className="d-flex bin-group">
          <div className="col-12">
            <BinPentagon selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`pentagonBin${this.props.group}`}
                         ref={`pentagonBin${this.props.group}`}
                         key={`pentagonBin${this.props.group}`}/>

            <BinCircle selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`circleBin${this.props.group}`}
                         ref={`circleBin${this.props.group}`}
                         key={`circleBin${this.props.group}`}/>

          </div>
          <div className="col-12">
            <BinTriangle selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`triangleBin${this.props.group}`}
                         ref={`triangleBin${this.props.group}`}
                         key={`triangleBin${this.props.group}`}/>

            <BinSquare selected={this.props.selected}
                         handleSelect={(e, id) => this.handleSelect(e, id)}
                         id={`squareBin${this.props.group}`}
                         ref={`squareBin${this.props.group}`}
                         key={`squareBin${this.props.group}`}/>

          </div>
          <div className='all-play-button'><PlayAllButton playing={this.props.playing} handlePlayAll={() => this.handlePlayAll()} /></div>
      </div>
    );
  }
}
