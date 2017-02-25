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
export function setMappedSquare(mappedSquares, payload) {
  const newSquares = [...mappedSquares]
  
  newSquares[payload.idx] = payload.square
  return newSquares
}

export function adjustSquareWalls(squareA, squareB) {
  // get direction from square B location
  // adjust squareA walls
  // return squareA walls
}