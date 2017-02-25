import { createSelector } from 'reselect'


// Selectors
export const getGridSize = (state) => state.gridSize
export const getSquareSize = (state) => state.squareSize
export const getCurrentSquare = (state) => state.currentSquare

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

  walls.splice(walls.indexOf(direction), 1)

  return walls
}