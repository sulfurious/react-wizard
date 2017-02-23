export const startDrawing = ({idx, ...square}) => {
  return {
    type: 'START_DRAWING',
    payload: {
      idx,
      square
    }
  }
}

export const drawWalls = ({idx, ...square}) => {
  return {
    type: 'DRAW_WALLS',
    payload: {
      idx,
      square
    }
  }
}