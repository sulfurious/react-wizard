import React, {PropTypes} from 'react'
import './square.css'


function buildClassName(walls) {
  return 'grid-square' + (walls.length ? ' mapped' : '')
}

function buildStyle(walls, size) {
  const sizePx = `${size}px`
  const style = {
    width: sizePx,
    height: sizePx,
  }

  if (walls.length) {
    style.backgroundImage = buildGradients(walls)
  }

  return style
}

function buildGradients(walls = []) {
  const color = '#666'
  const pct = '15%'

  return walls.map(wall => `linear-gradient(to ${wall}, ${color}, ${color} ${pct}, transparent ${pct})`)
}

const Square = ({onClick, onMouseOver, walls, size}) => {
  return (
    <div
      onClick={onClick}
      onMouseOver={onMouseOver}
      className={buildClassName(walls)} 
      style={buildStyle(walls, size)}>
    </div>
  )
}


Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  walls: PropTypes.array // ['top', 'left', 'bottom', 'right']
}

Square.defaultProps = {
  walls: []
}

export default Square
