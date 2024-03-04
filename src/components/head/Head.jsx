import React, { useState } from 'react'
import g from "../../assets/images/g.jpg"
import { Link } from 'react-router-dom'
import { nav } from '../../assets/data/nav/data'

function Head() {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)
    const close = () => {
      setProfileOpen(false)
    }
  
  return (
<>
<div className="head font-bold">

<header className='header'>
        <div className='container flex'>
          <div className='left'>
            <img src={g} alt='logo' className='logo' />
          </div>
          
          <div className='left '>
          <nav>
            <ul className='font-bold'>
              
              {nav.map((link) => (
                <li key={link.id}>
                     <Link to={link.url}><button className="btn "><b>
                 {link.text}
                 </b> </button></Link>
                </li>
              ))}
              <Link to={'/free'}>
               <li className="right"><button className='button'>Start for free</button></li></Link>

         
</ul>
          </nav>        
            
          
           </div>
          
           <nav className='nav'>
            <div className="row">
            <div className='profile'>
        {user ? (
          <div>
            <p className='img' onClick={() => setProfileOpen(!profileOpen)}>
          <button className="button" id='menu'>Menu</button>
            </p>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
             
                <Link to='/'>
                  <li className='box'>
                    <button className="btn">  <h4>Home</h4></button>
                  </li>
                </Link>
                <Link to='/careerTools'>
                  <li className='box'>
                  <button className="btn"><h4>Career Tools</h4></button>  
                  </li>
                </Link>
                <Link to='/priceOfTampletes'>
                  <li className='box'>
                  <button className="btn"><h4>Pricing</h4></button>
                    
                  </li>
                </Link>

                <Link to={'/free'}>
                <li className='box'>
                <button className="button">Start for Free</button>
                  
                </li>
                </Link>

              </div>
            )}
          </div>
        ) : (
          <button type="button">Start for free</button>
        )}
      </div>
            </div>
            
           </nav>
           
        </div>
      </header>

</div>

</>
  )
}

export default Head