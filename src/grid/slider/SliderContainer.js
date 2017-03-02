import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { resizeSquare } from '../duck'
import Slider from './Slider'


class SliderContainer extends Component {
  static propTypes = {
    squareSize: PropTypes.number
  }

  handleOnChange = (event) => {
    event.preventDefault()

    this.props.dispatch( resizeSquare(Number(event.target.value)) )
  }

  render() {
    const {squareSize} = this.props

    return (
      <Slider
        handleOnChange={this.handleOnChange} 
        value={squareSize}
      />        
    )
  }

}


const mapStateToProps = (state) => {
  return {
    squareSize: state.grid.squareSize
  }
}

export default connect(mapStateToProps)(SliderContainer)