import React from 'react'

import logo from './logo.svg'
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="title">React Wizardry !</h2>
        <h4 className="instructions">(click to start drawing. click to stop.)</h4>
    </div>
  )
}

export default Header