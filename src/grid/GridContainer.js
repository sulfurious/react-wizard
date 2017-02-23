import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as gridActions from './actions'
import {getGridColCount} from './selectors'
import Grid from './Grid'
import SquareContainer from './square/SquareContainer'


class GridContainer extends Component {

  componentDidMount() {
    this.handleResize()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize, false)
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined'){
      window.removeEventListener('resize', this.handleResize)
    }
  }

  handleResize = () => {
    const grid = this.gridRef
    
    this.props.dispatch(
      gridActions.resizeGrid({
        size: [grid.clientWidth, grid.clientHeight],
        offset: {
          top: grid.offsetTop,
          left: grid.offsetLeft
        }
      })
    )
  }

  handleSquareSizeChange = (event) => {
    event.preventDefault()

    this.props.dispatch( gridActions.resizeSquare(Number(event.target.value)) )
  }

  getSquareCount = (gridSize, squareSize) => {    
    return Math.floor(gridSize[0] / squareSize)
           * Math.floor(gridSize[1] / squareSize)
  }

  getSquareCol = (gridSize, squareSize, idx) => {
    const gridColCount = getGridColCount(this.props.gridState)

    return Math.ceil((idx + 1) / gridColCount)
  }

  render() {
    const {gridSize, squareSize} = this.props.gridState
    const squareCount = this.getSquareCount(gridSize, squareSize)
    const squares = Array(...Array(squareCount))

    return (
      <div 
        ref={gridRef => this.gridRef = gridRef}
        className="grid-container">
        
        <input 
          name="squareSize"
          type="range" 
          min="50" 
          max="200" 
          onChange={this.handleSquareSizeChange} 
          value={squareSize} />

        <Grid>
          {squares.map((square, idx) => {
            return (
              <SquareContainer col={this.getSquareCol(gridSize, squareSize, idx)} key={idx}/>
            )
          })}
        </Grid>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    gridState: state.grid
  }
}

export default connect(mapStateToProps)(GridContainer)
