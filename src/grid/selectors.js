import { createSelector } from 'reselect'


// Selectors
export const getGridSize = (state) => state.gridSize
export const getSquareSize = (state) => state.squareSize
export const getCurrentSquare = (state) => state.currentSquare > -1 && state.mappedSquares[state.currentSquare]

export const getGridColCount = createSelector(
  [getGridSize, getSquareSize],
  (gridSize, squareSize) => {
    return Math.floor(gridSize.width / squareSize)
  }
)

export const getGridRowCount = createSelector(
  [getGridSize, getSquareSize],
  (gridSize, squareSize) => {
    return Math.floor(gridSize.height / squareSize)
  }
)

export const getSquareCount = createSelector(
  [getGridSize, getSquareSize],
  (gridSize, squareSize) => {
    return Math.floor(gridSize.width / squareSize)
          * Math.floor(gridSize.height / squareSize)
  }
)


// Helpers
export function createSquare(properties) {
  return Object.assign({},
    {
      col: 0,
      row: 0,
      walls: ['top', 'bottom', 'left', 'right']
    },
    properties
  )
}

export function findMappedSquareIndexByPos(mappedSquares, square) {
  return mappedSquares.findIndex(
    mappedSquare => mappedSquare && mappedSquare.col === square.col && mappedSquare.row === square.row
  )
}

export function setMappedSquare(mappedSquares, square, idx) {
  const newSquares = [...mappedSquares]
  const squareIdx = idx === undefined ? findMappedSquareIndexByPos(mappedSquares, square) : idx
  newSquares[squareIdx] = square
  return newSquares
}

function getDrawDirection(fromSquare, toSquare) {
  if (toSquare.col > fromSquare.col) {
    return 'left'
  }
  if (toSquare.col < fromSquare.col) {
    return 'right'
  }
  if (toSquare.row < fromSquare.row) {
    return 'bottom'
  }
  if (toSquare.row > fromSquare.row) {
    return 'top'
  }

  return false  
}

export function drawSquareWalls(fromSquare, toSquare) {
  const walls = [...fromSquare.walls]
  const direction = getDrawDirection(fromSquare, toSquare)
  const idx = walls.indexOf(direction)

  if (idx > -1) {
    walls.splice(idx, 1)
  }

  return walls
}

export function buildGradients(walls = []) {
  const newWalls = buildDiagonalGradients(walls)
  const color = '#666'
  const pct = '15'

  return newWalls.map(wall => {
    let isDiagonal = Number.isFinite(wall)
    let wallPct = isDiagonal ? (pct/2) : pct
    let wallText = isDiagonal ? `${wall}deg` : `to ${wall}`
    return `linear-gradient(${wallText}, ${color}, ${color} ${wallPct}%, transparent ${wallPct}%)`
  })
}

// linear-gradient(45deg, rgb(102, 102, 102), rgb(102, 102, 102) 7.5%, transparent 7.5%)
export function buildDiagonalGradients(walls) {
  const newWalls = [...walls]
  const right = walls.indexOf('right') > -1
  const left = walls.indexOf('left') > -1
  const top = walls.indexOf('top') > -1
  const bottom = walls.indexOf('bottom') > -1

  if ((right && left) || (top && bottom)) {
    return newWalls
  }

  if (!right && !top) {    
    newWalls.push(45)
  }
  if (!right && !bottom) {    
    newWalls.push(135)
  }
  if (!left && !bottom) {    
    newWalls.push(225)
  }
  if (!left && !top) {    
    newWalls.push(315)
  }

  return newWalls
}
