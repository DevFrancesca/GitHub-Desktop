import React from 'react'
import './Header.css'
import IC from './images/desktop-icon.svg'


const Header = () => {
  return (
    <div className='head'>
      <img src={IC} alt="" />
      <div className="headText">
        <p>Overview</p>
        <span>Release Notes</span>
        <span>Help</span>
      </div>
    </div>
  )
}

export default Header
