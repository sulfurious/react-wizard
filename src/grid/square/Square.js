import React from 'react'
import './square.css'


function buildClassName(walls) {
  return 'grid-square' + (walls.length ? ' mapped' : '')
}

function buildStyle(walls, size) {
  const sizePx = `${size}px`

  return {
    width: sizePx,
    height: sizePx,
    backgroundImage: buildGradients(walls)
  }
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
  onClick: React.PropTypes.func.isRequired,
  onMouseOver: React.PropTypes.func.isRequired,
  size: React.PropTypes.number.isRequired,
  walls: React.PropTypes.array // ['top', 'left', 'bottom', 'right']
}

Square.defaultProps = {
  walls: []
}

export default Square
