import React, { useEffect, useState } from 'react'
import "./Navbar.css"

const Navbar = ({metamaskConnected,showMetaMaskBtn,showMetaMaskBtnConn}) => {
  const [metaMaskConn,setMetaMaskConn] = useState(false)

      const btnhandler = async () => {
        try {
          // Check if MetaMask is present
          if (window.ethereum) {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setMetaMaskConn(true);
            showMetaMaskBtnConn(true)
            alert("MetaMask Connected");
          } else {
            alert("Install MetaMask extension!!");
          }
        } catch (error) {
          alert("Error connecting to MetaMask: " + error.message);
        }
      };

  return (
    <div className="navbar__container">
      <div className='logout__container'>
        { metaMaskConn ? null :<button className='metamask__btn' onClick={btnhandler}>Conect Metamask</button>}
        <button className='logout__btn'>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
