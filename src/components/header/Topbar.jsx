import React from 'react'
import logo from "./logo.png"
import ad from "./ad.jpg"
import  './header.css'

function topbar() {
  return (
    <>
        <div className='logo-ad' >
            <img className="logo" src={logo} alt="logo image" />
            <img className="ad" src={ad} alt="logo image" />

        </div>
    
    </>
  )
}

export default topbar