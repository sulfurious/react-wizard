const initialState = {
  gridSize: [800, 800],
  gridOffset: {
    top: 0,
    left: 0
  },
  squareSize: 100,
  mappedSquares: []
}

export default function grid(state = initialState, action) {
  switch (action.type) {

  case 'RESIZE_SQUARE' :
    return {
      ...state,
      squareSize: action.size
    }

  case 'RESIZE_GRID' :
    return {
      ...state,
      gridSize: action.size,
      gridOffset: action.offset
    }

  default: 
    return initialState

  }
}
