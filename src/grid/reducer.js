const initialState = {
  gridSize: {
    width: 800,
    height: 800
  },
  squareSize: 100,
  mappedSquares: [],
  currentSquare: {
    col: 0,
    row: 0
  }
}

function setMappedSquare(mappedSquares, payload) {
  const newSquares = [...mappedSquares]
  
  newSquares[payload.idx] = payload.square
  return newSquares
}

export default function grid(state = initialState, action) {
  const {type, payload} = action //{type, payload, error, meta}

  switch (type) {

  case 'RESIZE_SQUARE' :
    return {
      ...state,
      squareSize: payload.size
    }

  case 'RESIZE_GRID' :
    return {
      ...state,
      gridSize: payload.size
    }

  case 'START_DRAWING' :
    return {
      ...state,
      mappedSquares: setMappedSquare(state.mappedSquares, payload),
      currentSquare: {
        col: payload.square.col,
        row: payload.square.row
      }
    }

  case 'DRAW_WALLS' :
    return {
      ...state,
      currentSquare: {
        col: payload.square.col,
        row: payload.square.row
      }
    }

  default: 
    return initialState
  }
}
