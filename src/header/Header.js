import React from 'react'

import logo from './logo.svg'
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="title">React Wizardry !</h2>
    </div>
  )
}

export default Header