import { createSelector } from 'reselect'

const getGridSize = (state) => state.gridSize
const getSquareSize = (state) => state.squareSize

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
