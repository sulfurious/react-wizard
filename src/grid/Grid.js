import React from 'react'

import './grid.css'

const Grid = ({setGridRef, children}) => <div ref={setGridRef} className="grid">{children}</div>

export default Grid
