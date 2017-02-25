import {setMappedSquare, drawSquareWalls, findMappedSquareIndexByPos} from './selectors'

// Actions
const RESIZE_SQUARE = 'wizard/grid/RESIZE_SQUARE';
const RESIZE_GRID = 'wizard/grid/RESIZE_GRID';
const START_DRAWING = 'wizard/grid/START_DRAWING';
const STOP_DRAWING = 'wizard/grid/STOP_DRAWING';
const DRAW_WALLS = 'wizard/grid/DRAW_WALLS';


const initialState = {
  gridSize: {
    width: 800,
    height: 800
  },
  squareSize: 100,
  mappedSquares: [],
  currentSquare: false, // or {col: 0, row: 0}
  nextSquare: false // or {col: 0, row: 0}
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
      currentSquare: {
        col: payload.square.col,
        row: payload.square.row
      }
    }

  case STOP_DRAWING :
    return {
      ...state,
      currentSquare: false
    }

  case DRAW_WALLS :
    let mappedSquares = [...state.mappedSquares]
    const currentSquare = mappedSquares[findMappedSquareIndexByPos(mappedSquares, payload.currentSquare)]
    const nextSquare = {...payload.nextSquare}
    
    currentSquare.walls = drawSquareWalls(currentSquare, nextSquare)
    nextSquare.walls = drawSquareWalls(nextSquare, currentSquare)
    mappedSquares = setMappedSquare(mappedSquares, currentSquare)
    mappedSquares = setMappedSquare(mappedSquares, nextSquare, payload.idx)

    return {
      ...state,
      mappedSquares,
      currentSquare: {
        col: nextSquare.col,
        row: nextSquare.row
      }
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
      idx,
      currentSquare,
      nextSquare
    }
  }
}