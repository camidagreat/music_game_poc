import React from 'react';

import './Game.scss'
import Shape from '../Shapes/Shape/Shape.js'
import BinGroup from '../Bin/BinGroup.js'

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
                    binE: {},
                    shapeE: {},
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
    this.setState({selectedDiv: id, shapeE: e})
  }

  handleBinSelect(e, id) {
    e.persist()
    let bin = parseInt(id.match(/\d+/)[0])
    if (this.state.selectedDiv !== '') {
      if (bin === 1) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup1

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
        }

        this.setState({ binGroup1: binContent,
                        binE: e,
                        selectedDiv:'',
                        lastBin: binTarget,
                        lastShape: shape},
                        () => this.onClickHandle())
      } else if (bin === 2 ) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup2

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
        }

        this.setState({ binGroup2: binContent,
                        binE: e,
                        selectedDiv:'',
                        lastBin: binTarget,
                        lastShape: shape},
                        () => this.onClickHandle())
      } else if (bin === 3 ) {
        let shape = this.state.selectedDiv
        let binTarget = id
        let binContent = this.state.binGroup3

        if (id.includes(this.state.selectedDiv.replace(/[0-9]/g, ''))) {
          binContent.push(this.state.selectedDiv)
        }

        this.setState({ binGroup3: binContent,
                        binE: e,
                        selectedDiv:'',
                        lastBin: binTarget,
                        lastShape: shape},
                        () => this.onClickHandle())
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
                                                                     handleSelect={(e, id) => this.handleSelect(e, id)} />
                                                              )})



    return (
      <div className="beatrix">
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
          <div className="col-6 mx-auto" style={{left:-70}}>
            <div className="row justify-content-center">
              <BinGroup selected={this.state.selectedDiv}
                        group={1}
                        key={'binGroup1'}
                        ref={'binGroup1'}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) } />
            </div>
          </div>
          <div className="col-6 mx-auto" style={{left:-70}}>
            <div className="row justify-content-center">
              <BinGroup selected={this.state.selectedDiv}
                        group={2}
                        key={'binGroup2'}
                        ref={'binGroup2'}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) } />
            </div>
          </div>
          <div className="col-6 mx-auto" >
            <div className="row justify-content-center">
              <BinGroup selected={this.state.selectedDiv}
                        group={3}
                        key={'binGroup3'}
                        ref={'binGroup3'}
                        handleBinSelect={(e, id) => this.handleBinSelect(e, id) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
