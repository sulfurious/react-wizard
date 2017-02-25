import { createSelector } from 'reselect'

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

export const adjustSquareWalls = (squareA, squareB) => {
  // get direction from square B location
  // adjust squareA walls
  // return squareA walls
}