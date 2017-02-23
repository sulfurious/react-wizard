export const resizeSquare = (size) => {
  return {
    type: 'RESIZE_SQUARE',
    size: size
  }
}

export const resizeGrid = ({size, offset}) => {
  return {
    type: 'RESIZE_GRID',
    size: size,
    offset: offset
  }
}