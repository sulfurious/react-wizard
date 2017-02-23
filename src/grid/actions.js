export const resizeGrid = ({size, offset}) => {
  return {
    type: 'RESIZE_GRID',
    payload: {
      size,
      offset
    }
  }
}