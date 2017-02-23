import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as sliderActions from './actions'
import Slider from './Slider'


class SliderContainer extends Component {

  handleOnChange = (event) => {
    event.preventDefault()

    this.props.dispatch( sliderActions.resizeSquare(Number(event.target.value)) )
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