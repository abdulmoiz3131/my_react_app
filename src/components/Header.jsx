import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
     <div className="logo">ToDoList</div>
     <div className="navbar"><a href="/home">Home</a><a href="/about">About</a></div>
    </div>
  )
}

export default Header