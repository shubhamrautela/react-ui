import React from 'react'
import bell from './images/bell.png'
import chat from './images/chat.png'
function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <div className="icon"></div>
        Logo
      </div>
        <nav className="panels">
          <div className="Dashboard"><b>Dashboard</b></div>
          <div className="Experts"><b>Find Experts</b></div>
          <div className="Discussion"><b>Discussion</b></div>
        </nav>
        <div className="icons">
          <div className="bell"></div>
          <div className="chat"></div>
          <div className="man"></div>
        </div>
      </header>
    </>
  )


}

export default Header
