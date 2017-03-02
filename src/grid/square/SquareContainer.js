import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

import {startDrawing, stopDrawing, drawWalls} from '../duck'
import {getCurrentSquare, createSquare} from '../selectors'
import Square from './Square'


class SquareContainer extends Component {
  static propTypes = {
    idx: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired
  }

  handleSquareClick = (event) => {
    const {idx, col, row, currentSquare, mappedSquare} = this.props
    const square = mappedSquare || createSquare({col, row})

    event.preventDefault()

    if (currentSquare) {
      this.props.stopDrawing()      

    } else {
      this.props.startDrawing({
        idx,
        square
      })
    }
  }

  handleSquareMouseOver = (event) => {
    const {idx, col, row, currentSquare, mappedSquare} = this.props    
    const nextSquare = mappedSquare || createSquare({col, row})

    event.preventDefault()

    if (currentSquare) {
      this.props.drawWalls({
        idx,
        currentSquare,
        nextSquare
      })
    }
  }

  setWalls = (side, walls = ['top', 'bottom', 'left', 'right']) => {
    const newWalls = [...walls]

    if (side && newWalls.indexOf(side) === -1) {
      newWalls.push(side)
    }

    return newWalls
  }

  render() {
    const {mappedSquare, squareSize} = this.props

    return (
      <Square 
        size={squareSize}
        isMapped={!!mappedSquare}
        walls={mappedSquare && mappedSquare.walls}
        onClick={this.handleSquareClick}
        onMouseOver={this.handleSquareMouseOver}
        />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    squareSize: state.grid.squareSize,
    currentSquare: getCurrentSquare(state.grid),
    mappedSquare: state.grid.mappedSquares.find(
      square => square && square.col === ownProps.col && square.row === ownProps.row
    )
  }
}

export default connect(
  mapStateToProps, 
  {
    startDrawing, 
    stopDrawing, 
    drawWalls
  }
)(SquareContainer)
