import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'

import * as squareActions from './actions'
import Square from './Square'


class SquareContainer extends Component {
  static propTypes = {
    idx: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired
  }

  handleSquareClick = (event) => {
    const {idx, col, row} = this.props
    
    event.preventDefault()

    this.props.startDrawing({
      idx,
      col,
      row,
      walls: this.setWalls()
    })
  }

  handleSquareMouseOver = (event) => {
    const {idx, col, row} = this.props
    
    event.preventDefault()

    this.props.drawWalls({
      idx,
      col,
      row
    })
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
    mappedSquare: state.grid.mappedSquares.find(
      square => square && square.col === ownProps.col && square.row === ownProps.row
    )
  }
}

export default connect(mapStateToProps, squareActions)(SquareContainer)
