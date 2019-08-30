import React from 'react';
import $ from 'jquery'

import './Game.scss'
import Shape from '../Shapes/Shape/Shape.js'
import BinGroup from '../Bin/BinGroup.js'
import Header from '../Header/Header.js'
import InfoModals from '../Modals/InfoModals.js'

import CircleImage from '../../Assets/Circle.png'
import SquareImage from '../../Assets/Square.png'
import PentagonImage from '../../Assets/Pentagon.png'
import TriangleImage from '../../Assets/Triangle.png'
import CircleOutline from '../../Assets/CircleOutline.png'
import SquareOutline from '../../Assets/SquareOutline.png'
import PentagonOutline from '../../Assets/PentagonOutline.png'
import TriangleOutline from '../../Assets/TriangleOutline.png'
import CircleOutlineHighlighted from '../../Assets/CircleOutlineHighlighted.png'
import SquareOutlineHighlighted from '../../Assets/SquareOutlineHighlighted.png'
import PentagonOutlineHighlighted from '../../Assets/PentagonOutlineHighlighted.png'
import TriangleOutlineHighlighted from '../../Assets/TriangleOutlineHighlighted.png'

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state =  { plays: 30,
                    successCount: 0,
                    selectedDiv: '',
                    lastShape: '',
                    lastBin: '',
                    binGroup1: [],
                    binGroup2: [],
                    binGroup3: [],
                    showModal0: false,
                    showModal1: false,
                    showModal2: false,
                    showModal3: false,
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
                          shape: 'circle',

                        },
                        circle2: {
                          id: "circle2",
                          shape: 'circle',

                        },
                        circle3: {
                          id: "circle3",
                          shape: 'circle',

                        }
                      },
                      squares: {
                        square1: {
                          id: "square1",
                          shape: 'square',

                        },
                        square2: {
                          id: "square2",
                          shape: 'square',

                        },
                        square3: {
                          id: "square3",
                          shape: 'square',

                        }
                      },
                      pentagons: {
                        pentagon1: {
                          id: "pentagon1",
                          shape: 'pentagon'
                        },
                        pentagon2: {
                          id: "pentagon2",
                          shape: 'pentagon',

                        },
                        pentagon3: {
                          id: "pentagon3",
                          shape: 'pentagon',

                        }
                      },
                      triangles: {
                        triangle1: {
                          id: "triangle1",
                          shape: 'triangle',

                        },
                        triangle2: {
                          id: "triangle2",
                          shape: 'triangle',

                        },
                        triangle3: {
                          id: "triangle3",
                          shape: 'triangle',

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
      this.setState({selectedDiv: id, plays: newPlayCount}, () => {
        if (this.state.plays == 0) {
          document.getElementById('game-over').classList.add("show-panel");
        }
      })
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

    let allBins = ['binGroup1', 'binGroup2', 'binGroup3']
    let newBinNumber = parseInt(id.match(/\d+/)[0])
    let newBin = id
    let newBinGroup = `binGroup${newBinNumber}`
    let newBinGroupContent = this.state[newBinGroup]

    let oldBin
    let oldBinGroup = ''
    let oldBinGroupContent

    // checking bins to see if the shape is in one already
    allBins.forEach((bin) => {
      if (this.state[bin].includes(this.state.selectedDiv)) {
        oldBinGroup = bin
        oldBinGroupContent = this.state[bin]
        oldBin = newBin.replace(/[0-9]/g, '') + parseInt(oldBinGroup.match(/\d+/)[0])
      }
    })

    // stops other audio if playing from single track
    let audio = document.getElementById(`audio-${this.state.selectedDiv}`)
    if (audio && !audio.paused){
      audio.pause();
      audio.currentTime = 0
    }

    // decides wether div should be moved among bins, back to original location, or to first bin
    if (this.state.selectedDiv !== '') {
      let shape = this.state.selectedDiv
      if (newBin.includes(shape.replace(/[0-9]/g, ''))) {
        if (oldBinGroup === '') {
          newBinGroupContent.push(shape)
          this.setState({ [newBinGroup]: newBinGroupContent,
                          selectedDiv:'',
                          lastBin: newBin,
                          lastShape: shape},
                          () => this.onClickHandle(this.state.lastBin, this.state.lastShape))
        } else {
          newBinGroupContent.push(shape)
          oldBinGroupContent = oldBinGroupContent.filter((value, index, arr) => value !== shape)

          this.setState({ [newBinGroup]: newBinGroupContent,
                          [oldBinGroup]: oldBinGroupContent,
                          selectedDiv:'',
                          lastBin: newBin,
                          lastShape: shape},
                          () => this.onSecondClickHandle(this.state.lastBin, this.state.lastShape, oldBin))
        }
      }
    }
  }

  handleSubmitSet(bin) {
    if (this.state[bin].length > 3) {
      document.getElementById(`${bin}Success`).classList.add("show-panel");
      this.setState( prevState => ({successCount: prevState.successCount + 1}), () => {
        if (this.state.successCount == 3) {
          document.getElementById('game-success').classList.add("show-panel");
        }
      })
    }

  }

  onClickHandle(bin, shape) {
    let shapeX = document.getElementById(shape).getBoundingClientRect()['x'];
    let shapeY = document.getElementById(shape).getBoundingClientRect()['y'];
    let binX = document.getElementById(bin).getBoundingClientRect()['x'];
    let binY = document.getElementById(bin).getBoundingClientRect()['y'];
    let shapeDiv = document.getElementById(shape);

    shapeDiv.style.transform = "translate3d(" + (binX - shapeX) + "px, " + (binY - shapeY) + "px, 0)"

    var shapeState = this.state.shapeData
    let shapeStr = shape.replace(/[0-9]/g, '')
    shapeState[`${shapeStr}s`][shape].xOffset = shapeX
    shapeState[`${shapeStr}s`][shape].yOffset = shapeY

    this.setState({shapeData: shapeState})
  }

  onSecondClickHandle(newBin, shape, oldBin) {
    let newBinX = document.getElementById(newBin).getBoundingClientRect()['x'];
    let newBinY = document.getElementById(newBin).getBoundingClientRect()['y'];
    let shapeDiv = document.getElementById(shape);
    let origOffset = this.state.shapeData[`${shape.replace(/[0-9]/g, '')}s`][shape]

    shapeDiv.style.transform = "translate3d(" + (newBinX - (origOffset.xOffset)) + "px, " + (newBinY - (origOffset.yOffset)) + "px, 0)"

    if (oldBin === '') {
      let bins = ['binGroup1', 'binGroup2', 'binGroup3']
      bins.forEach((bin) => {
        let newBinState = this.state[bin].filter((value, index, arr) => value !== shape)
        this.setState({[bin]: newBinState, selectedDiv:''})
      })
      // stops other audio if playing from single track
      let audio = document.getElementById(`audio-${this.state.lastShape}`)
      audio.pause();
      audio.currentTime = 0
    }
  }

  tutorial(action, currentModal, number) {
    if (action === 'close') {
      this.setState({[currentModal]: false})
    } else if (action === 'next') {
      let nextModal = currentModal.substring(0, currentModal.length - 1) + (number + 1).toString();
      this.setState({[nextModal]: true, [currentModal]: false})
    } else if (action === 'start') {
      this.setState({showModal0: true})
    }
  }

  componentDidMount() {
    // let allShapes = []
    // let placedShapes = []
    // let location = []
    // let randomizedLocations
    //
    // if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //   randomizedLocations = [[2, 15], [15,5], [3, 15], [1, 2], [5, 1], [14,21], [-30, -10], [13,5], [6, 10], [21,10], [5, 10], [50,10]]
    // } else {
    //   randomizedLocations = [[2, 15], [15,5], [3, 15], [1, 2], [5, 1], [14,21], [-30, -10], [13,5], [6, 10], [21,10], [5, 10], [50,10]]
    // }
    // Object.keys(this.state.shapeData).map((key) => {
    //   let groupData = this.state.shapeData[key]
    //   Object.keys(groupData).map((shapeKey) => {
    //     let shape = groupData[shapeKey]
    //     allShapes.push(shape.id)
    //   })
    // })
    //
    // allShapes.map((shape) => {
    //   let shapeX = document.getElementById(shape).getBoundingClientRect()['x'];
    //   let shapeY = document.getElementById(shape).getBoundingClientRect()['y'];
    //   let shapeDiv = document.getElementById(shape)
    //   let  movement = randomizedLocations.shift()
    //   shapeDiv.style.transform = "translate3d(" + (movement[0]) + "px, " + (movement[1]) + "px, 0)"
    // })
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
                                                                      shapeImage={CircleImage}
                                                                      shapeOutline={CircleOutline}
                                                                      shapeOutlineHighlighted={CircleOutlineHighlighted}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)}
                                                                      handleShapeBack={(nothing, shape, shapeOutline) => this.onSecondClickHandle(nothing, shape, shapeOutline)}/>
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
                                                                      shapeImage={SquareImage}
                                                                      shapeOutline={SquareOutline}
                                                                      shapeOutlineHighlighted={SquareOutlineHighlighted}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)}
                                                                      handleShapeBack={(nothing, shape, shapeOutline) => this.onSecondClickHandle(nothing, shape, shapeOutline)}/>
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
                                                                      shapeImage={PentagonImage}
                                                                      shapeOutline={PentagonOutline}
                                                                      shapeOutlineHighlighted={PentagonOutlineHighlighted}
                                                                      handleSelect={(e, id) => this.handleSelect(e, id)}
                                                                      handleShapeBack={(nothing, shape, shapeOutline) => this.onSecondClickHandle(nothing, shape, shapeOutline)}/>
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
                                                                     shapeImage={TriangleImage}
                                                                     shapeOutline={TriangleOutline}
                                                                     shapeOutlineHighlighted={TriangleOutlineHighlighted}
                                                                     handleSelect={(e, id) => this.handleSelect(e, id)}
                                                                     handleShapeBack={(nothing, shape, shapeOutline) => this.onSecondClickHandle(nothing, shape, shapeOutline)}/>
                                                              )})


    return (
      <div className="beatrix">
        <Header plays={this.state.plays} tutorial={(phase) => this.tutorial(phase)} />
        <InfoModals
          showModal0={this.state.showModal0}
          showModal1={this.state.showModal1}
          showModal2={this.state.showModal2}
          showModal3={this.state.showModal3}
          handleButtonClick={(action, currentModal, number) => this.tutorial(action, currentModal, number)}
        />
        <div className="row moving-shapes">
          <div id='game-success' className='game-success p-auto'><h1 className='text-success text-center'>Great job!</h1></div>
          <div id='game-over' className='game-over p-auto'><h1 className='text-danger text-center'>You used too many plays. Try again!</h1></div>
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
        <div className="row">
          <div className="col-md-2 col-3 mr-auto">
              <BinGroup selected={this.state.selectedDiv}
                        group={1}
                        locator={'binGroup1'}
                        playing={this.state.binGroup1Playing}
                        groupContent={this.state.binGroup1}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) }
                        handleSubmitSet={(bin) => this.handleSubmitSet(bin)} />
          </div>
          <div className="col-md-2 col-3 mx-auto">
              <BinGroup selected={this.state.selectedDiv}
                        group={2}
                        locator={'binGroup2'}
                        playing={this.state.binGroup2Playing}
                        groupContent={this.state.binGroup2}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) }
                        handleSubmitSet={(bin) => this.handleSubmitSet(bin)} />
          </div>
          <div className="col-md-2 col-3 mx-auto" >
              <BinGroup selected={this.state.selectedDiv}
                        group={3}
                        locator={'binGroup3'}
                        playing={this.state.binGroup3Playing}
                        groupContent={this.state.binGroup3}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) }
                        handlePlayAll={(bin) => this.handlePlayAll(bin) }
                        handleSubmitSet={(bin) => this.handleSubmitSet(bin)} />
          </div>
        </div>
      </div>
    );
  }
}
