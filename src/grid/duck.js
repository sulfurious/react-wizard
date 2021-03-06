import {setMappedSquare, drawSquareWalls} from './selectors'

// Actions
const RESIZE_SQUARE = 'wizard/grid/RESIZE_SQUARE'
const RESIZE_GRID = 'wizard/grid/RESIZE_GRID'
const START_DRAWING = 'wizard/grid/START_DRAWING'
const STOP_DRAWING = 'wizard/grid/STOP_DRAWING'
const DRAW_WALLS = 'wizard/grid/DRAW_WALLS'


const initialState = {
  gridSize: {
    width: 800,
    height: 800
  },
  squareSize: 100,
  mappedSquares: [],
  currentSquare: -1 // index
}

// Reducer
export default function reducer(state = initialState, action) {
  const {type, payload} = action //{type, payload, error, meta}

  switch (type) {

  case RESIZE_SQUARE :
    return {
      ...state,
      squareSize: payload.size
    }

  case RESIZE_GRID :
    return {
      ...state,
      gridSize: payload.size
    }

  case START_DRAWING :
    return {
      ...state,
      mappedSquares: setMappedSquare(state.mappedSquares, payload.square, payload.idx),
      currentSquare: payload.idx
    }

  case STOP_DRAWING :
    return {
      ...state,
      currentSquare: -1
    }

  case DRAW_WALLS :
    return {
      ...state,
      mappedSquares: 
        setMappedSquare(
          setMappedSquare(
            state.mappedSquares, 
            payload.nextSquare, 
            payload.nextSquareIdx
          ), 
          payload.currentSquare, 
          state.currentSquare
        ),
      currentSquare: payload.nextSquareIdx
    }

  default: 
    return initialState
  }
}


// Action creators
export function resizeGrid({size, offset}) {
  return {
    type: RESIZE_GRID,
    payload: {
      size,
      offset
    }
  }
}

export function resizeSquare(size) {
  return {
    type: RESIZE_SQUARE,
    payload: {
      size
    }
  }
}

export function startDrawing({idx, square}) {
  return {
    type: START_DRAWING,
    payload: {
      idx,
      square
    }
  }
}

export function stopDrawing() {
  return {
    type: STOP_DRAWING
  }
}

export function drawWalls({idx, currentSquare, nextSquare}) {
  return {
    type: DRAW_WALLS,
    payload: {
      currentSquare: {
        ...currentSquare,
        walls: drawSquareWalls(currentSquare, nextSquare)
      },
      nextSquare: {
        ...nextSquare,
        walls: drawSquareWalls(nextSquare, currentSquare)
      },
      nextSquareIdx: idx
    }
  }
}