import React, {Component} from 'react'
import {connect} from 'react-redux'

import {resizeGrid} from './duck'
import {getGridColCount, getSquareCount} from './selectors'
import Grid from './Grid'
import SquareContainer from './square'
import SliderContainer from './slider'


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
    
    this.props.resizeGrid({
      size: {
        width: grid.clientWidth, 
        height: grid.clientHeight
      }
    })
  }

  setGridRef = gridRef => this.gridRef = gridRef

  getSquareCol = (gridColCount, idx) => {
    return idx % gridColCount + 1
  }

  getSquareRow = (gridColCount, idx) => {
    return Math.ceil((idx + 1) / gridColCount)
  }

  buildSquareContainer = (idx, gridColCount) => {
    const col = this.getSquareCol(gridColCount, idx)
    const row = this.getSquareRow(gridColCount, idx)

    return (      
      <SquareContainer
        key={`col-${col}-row-${row}`}
        col={col} 
        row={row}
        idx={idx} 
      />
    )
  }

  render() {
    const {squareCount, gridColCount} = this.props
    const squares = Array(...Array(squareCount))

    return (
      <div className="grid-container">        
        <SliderContainer/>

        <Grid setGridRef={this.setGridRef}>
          {squares.map( (square, idx) => this.buildSquareContainer(idx, gridColCount) )}
        </Grid>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    squareCount: getSquareCount(state.grid),
    gridColCount: getGridColCount(state.grid),
  }
}

export default connect(mapStateToProps, {resizeGrid})(GridContainer)
