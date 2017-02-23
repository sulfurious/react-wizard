export const resizeSquare = (size) => {
  return {
    type: 'RESIZE_SQUARE',
    payload: {
      size
    }
  }
}