import React from 'react';

import './Game.scss'
import Shape from '../Shapes/Shape/Shape.js'
import BinGroup from '../Bin/BinGroup.js'
import Header from '../Header/Header.js'

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state =  { plays: 30,
                    selectedDiv: '',
                    lastShape: '',
                    lastBin: '',
                    binGroup1: [],
                    binGroup2: [],
                    binGroup3: [],
                    binGroup1Playing: false,
                    binGroup2Playing: false,
                    binGroup3Playing: false,
                    music:{
                      circle1: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/1-CHORDS-PIANO.mp3?alt=media&token=4f92b163-68a6-4200-a1db-4b6e6ec06d1e',
                      circle2: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/2-CHORDS-TRIBE-CALLED-IT.mp3?alt=media&token=e886434c-4676-4760-bc7e-c8a874de95fd',
                      circle3: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/3-CHORDS-MALLET.mp3?alt=media&token=79dfb57b-8670-432f-aee4-37a643326415',
                      square1: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/1-DRUMS-4-ON-FLOOR.mp3?alt=media&token=be9a30c3-e31c-4dbb-b40d-a3caea08c00e',
                      square2: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/2-DRUMS-HIP-HOP.mp3?alt=media&token=6dc87c95-2b66-4666-b95e-6856be3c143f',
                      square3: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/3-DRUMS-SPIRAL.mp3?alt=media&token=62c5bf81-62d9-404b-8dc8-5189a3151a2b',
                      pentagon1: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/1-MELODY-LEAD-BASS.mp3?alt=media&token=ebd9260d-e5ff-4e7e-9188-5c57ae878945',
                      pentagon2: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/2-MELODY-BASS-LEAD.mp3?alt=media&token=7f9ac552-b7f6-4c86-8241-018a6b6650c7',
                      pentagon3: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/3-MELODY-GUITAR.mp3?alt=media&token=5ba2d1f7-115c-46dd-8316-7f9942bc1a0a',
                      triangle1: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/1-SOUND-MACHINE.mp3?alt=media&token=653e1cb1-6757-4a04-a85e-52265540e749',
                      triangle2: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/2-SOUND-BOTTLE-SCRAPE.mp3?alt=media&token=c0207604-a270-488d-a92e-f0f4acac01cb',
                      triangle3: 'https://firebasestorage.googleapis.com/v0/b/sonically-38cf4.appspot.com/o/3-SOUND-CRICKETS.mp3?alt=media&token=614b47e3-82b1-40ea-a12a-212998763c15',
                    },
                    shapeData: {
                      circles: {
                        circle1: {
                          id: "circle1",
                          shape: 'circle'
                        },
                        circle2: {
                          id: "circle2",
                          shape: 'circle'
                        },
                        circle3: {
                          id: "circle3",
                          shape: 'circle'
                        }
                      },
                      squares: {
                        square1: {
                          id: "square1",
                          shape: 'square'
                        },
                        square2: {
                          id: "square2",
                          shape: 'square'
                        },
                        square3: {
                          id: "square3",
                          shape: 'square'
                        }
                      },
                      pentagons: {
                        pentagon1: {
                          id: "pentagon1",
                          shape: 'pentagon'
                        },
                        pentagon2: {
                          id: "pentagon2",
                          shape: 'pentagon'
                        },
                        pentagon3: {
                          id: "pentagon3",
                          shape: 'pentagon'
                        }
                      },
                      triangles: {
                        triangle1: {
                          id: "triangle1",
                          shape: 'triangle'
                        },
                        triangle2: {
                          id: "triangle2",
                          shape: 'triangle'
                        },
                        triangle3: {
                          id: "triangle3",
                          shape: 'triangle'
                        }
                      }
                    }
                  };
  }

  handleSelect(e, id) {
    e.persist()
    let newPlayCount = this.state.plays - 1

    if (this.state.selectedDiv !== '') {
      let audio = document.getElementById(`audio-${this.state.selectedDiv}`)
      audio.pause()
      audio.currentTime = 0
    }

    if (this.state.selectedDiv !== id) {
      this.setState({selectedDiv: id, plays: newPlayCount})
    } else {
      this.setState({selectedDiv: ''})
      let audio = document.getElementById(`audio-${id}`)
      audio.pause();
      audio.currentTime = 0
    }
  }

  handlePlayAll(bin) {
    let fileData = this.state[bin]
    let audios = []

    fileData.map((file) => {
      let audio = document.getElementById(`audio-${file}`)
      audios.push(audio)
    })

    if (this.state[`${bin}Playing`] === false) {
      audios.map((audio) => {
        audio.play()
      })

      let plays = this.state.plays - 1
      this.setState({plays: plays})
    } else {
      audios.map((audio) => {
        audio.currentTime = 0
        audio.pause()
      })
    }

    if (bin === 'binGroup1') {
        this.setState( prevState => ({binGroup1Playing: !prevState.binGroup1Playing}));
    } else if (bin === 'binGroup2') {
        this.setState( prevState => ({binGroup2Playing: !prevState.binGroup2Playing}));
    } else if (bin === 'binGroup3') {
        this.setState( prevState => ({binGroup3Playing: !prevState.binGroup3Playing}));
    }

  }

  handleBinSelect(e, id) {
    e.persist()
    let bin = parseInt(id.match(/\d+/)[0])

    let audio = document.getElementById(`audio-${this.state.selectedDiv}`)
    audio.pause();
    audio.currentTime = 0

    if (this.state.selectedDiv !== '') {
      if (bin === 1) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup1

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
          this.setState({ binGroup1: binContent,
                          selectedDiv:'',
                          lastBin: binTarget,
                          lastShape: shape},
                          () => this.onClickHandle())
        } else {
          this.handlePlayAll(`binGroup${bin}`)
        }
      } else if (bin === 2 ) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup2

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
          this.setState({ binGroup2: binContent,
                          selectedDiv:'',
                          lastBin: binTarget,
                          lastShape: shape},
                          () => this.onClickHandle())
          } else {
            this.handlePlayAll(`binGroup${bin}`)
          }
      } else if (bin === 3 ) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup3

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
          this.setState({ binGroup3: binContent,
                          selectedDiv:'',
                          lastBin: binTarget,
                          lastShape: shape},
                          () => this.onClickHandle())
          } else {
            this.handlePlayAll(`binGroup${bin}`)
          }
      }
    }
  }

  onClickHandle() {
    let binX = document.getElementById(this.state.lastBin).getBoundingClientRect()['x'];
    let binY = document.getElementById(this.state.lastBin).getBoundingClientRect()['y'];
    let shapeX = document.getElementById(this.state.lastShape).getBoundingClientRect()['x'];
    let shapeY = document.getElementById(this.state.lastShape).getBoundingClientRect()['y'];
    let shape = document.getElementById(this.state.lastShape);

    shape.style.transform = "translate3d(" + (binX - shapeX) + "px, " + (binY - shapeY) + "px, 0)"
  }

  render() {

    let circles = Object.keys(this.state.shapeData.circles).map((key) => {
                                                          let data = this.state.shapeData.circles[key]
                                                          return (
                                                              <Shape  id={data.id}
                                                                      key={data.id}
                                                                      ref={data.id}
                                                                      shape={data.shape}
                                                                      selected={this.state.selectedDiv}
                                                                      audio={this.state.music[data.id]}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)} />
                                                               )})
    let squares = Object.keys(this.state.shapeData.squares).map((key) => {
                                                          let data = this.state.shapeData.squares[key]
                                                          return (
                                                              <Shape  id={data.id}
                                                                      key={data.id}
                                                                      ref={data.id}
                                                                      shape={data.shape}
                                                                      selected={this.state.selectedDiv}
                                                                      audio={this.state.music[data.id]}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)} />
                                                                )})
    let pentagons = Object.keys(this.state.shapeData.pentagons).map((key) => {
                                                          let data = this.state.shapeData.pentagons[key]
                                                          return (
                                                              <Shape  id={data.id}
                                                                      key={data.id}
                                                                      ref={data.id}
                                                                      shape={data.shape}
                                                                      selected={this.state.selectedDiv}
                                                                      audio={this.state.music[data.id]}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)} />
                                                               )})
    let triangles = Object.keys(this.state.shapeData.triangles).map((key) => {
                                                          let data = this.state.shapeData.triangles[key]
                                                          return (
                                                             <Shape  id={data.id}
                                                                     key={data.id}
                                                                     ref={data.id}
                                                                     shape={data.shape}
                                                                     selected={this.state.selectedDiv}
                                                                     audio={this.state.music[data.id]}
                                                                     handleSelect={(e, id) => this.handleSelect(e, id)} />
                                                              )})



    return (
      <div className="beatrix">
        <Header plays={this.state.plays} />
        <div className="row">
          <div className="col-3">
            {circles}
          </div>
          <div className="col-3">
            {squares}
          </div>
          <div className="col-3">
            {pentagons}
          </div>
          <div className="col-3">
            {triangles}
          </div>
        </div>
        <div className="bounds-line">
          <div className="line-top"></div>
          <div className="line-bottom"></div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-md-4 col-xs-6 mx-auto">
            <div className="row mx-auto">
              <BinGroup selected={this.state.selectedDiv}
                        group={1}
                        locator={'binGroup1'}
                        playing={this.state.binGroup1Playing}
                        groupContent={this.state.binGroup1}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) } />
            </div>
          </div>
          <div className="col-md-4 col-xs-6 mx-auto">
            <div className="row justify-content-center">
              <BinGroup selected={this.state.selectedDiv}
                        group={2}
                        locator={'binGroup2'}
                        playing={this.state.binGroup2Playing}
                        groupContent={this.state.binGroup2}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) } />
            </div>
          </div>
          <div className="col-md-4 col-xs-6 mx-auto" >
            <div className="row mx-auto">
              <BinGroup selected={this.state.selectedDiv}
                        group={3}
                        locator={'binGroup3'}
                        playing={this.state.binGroup3Playing}
                        groupContent={this.state.binGroup3}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
