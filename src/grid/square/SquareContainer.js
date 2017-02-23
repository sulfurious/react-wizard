import React, {Component} from 'react'
import {connect} from 'react-redux'

import Square from './Square'


class SquareContainer extends Component {
  handleSquareClick = (event) => {
    event.preventDefault()
    console.log('client event:', Object.assign({}, event))
  }

  handleSquareMouseOver = (event) => {
    event.preventDefault()
  }

  render() {
    const {squareSize} = this.props.gridState

    return (
      <Square 
        size={squareSize}
        walls={[]}
        onClick={this.handleSquareClick}
        onMouseOver={this.handleSquareMouseOver}
        />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    gridState: state.grid
  }
}

export default connect(mapStateToProps)(SquareContainer)
