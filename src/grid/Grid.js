import React, { PropTypes } from 'react'

import './grid.css'

const Grid = ({setGridRef, children}) => <div ref={setGridRef} className="grid">{children}</div>

Grid.propTypes = {
  setGridRef: PropTypes.func.isRequired
}

export default Grid
