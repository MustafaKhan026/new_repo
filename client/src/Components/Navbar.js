import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const Navbar = ({metamaskConnected,btnhandler}) => {
    const [scrolled,setScrolled] = useState(false)

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

  return (
    <div className="navbar__container">
      <div className='logout__container'>
        { metamaskConnected? null :<button className='metamask__btn' onClick={btnhandler}>Conect Metamask</button>}
        <button className='logout__btn'>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
