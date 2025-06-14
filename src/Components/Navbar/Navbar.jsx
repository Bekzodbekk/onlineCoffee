import React from 'react'
import "./navbar.scss"

const Navbar = ({bucketShowCheck}) => {
  
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={"assets/icons/logo.png"} alt="Logo" />
      </div>
      <div className="btns">
        <div className="location">
          <img src={"assets/icons/location.png"} alt="location" />
          <h3>Porto Alegra, RS</h3>
        </div>
        <div className="shop-buck" onClick={bucketShowCheck}>
          <img src={"assets/icons/buck.png"} alt="shopping buck" />
        </div>
      </div>
    </div>
  )
}

export default Navbar