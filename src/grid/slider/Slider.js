import React, {PropTypes} from 'react'

const Slider = ({handleOnChange, value, min, max}) => {
  return (
    <input 
      type="range" 
      min={min}
      max={max} 
      onChange={handleOnChange} 
      value={value} 
    />
  )
}

Slider.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
}

Slider.defaultProps = {
  min: 50,
  max: 200
}

export default Slider