import { createSelector } from 'reselect'

const getGridSize = (state) => state.gridSize
const getSquareSize = (state) => state.squareSize

export const getGridColCount = createSelector(
    [getGridSize, getSquareSize],
    (gridSize, squareSize) => {
      return Math.floor(gridSize[0] / squareSize)
    }
)
