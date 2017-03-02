import React, {PropTypes} from 'react'

import { buildGradients } from '../selectors'
import './square.css'


function buildClassName(isMapped) {
  return 'grid-square ' + (isMapped ? 'mapped' : '')
}

function buildStyle(walls, size, isMapped) {
  const sizePx = `${size}px`
  const style = {
    width: sizePx,
    height: sizePx,
  }

  if (isMapped) {
    style.backgroundImage = buildGradients(walls)
  }

  return style
}

const Square = ({onClick, onMouseOver, walls, size, isMapped}) => {
  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={buildClassName(walls)} 
      style={buildStyle(walls, size, isMapped)}>
    </div>
  )
}


Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  isMapped: PropTypes.bool,
  walls: PropTypes.array // ['top', 'left', 'bottom', 'right']
}

export default Square
