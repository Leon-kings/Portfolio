import React from 'react'
import {BsInputCursorText  } from 'react-icons/bs'
import Screenshot from "../../assets/images/Screenshot.png"
import { Link } from 'react-router-dom'
// resumes
import Screenshot6 from "../../assets/images/Screenshot6.png"
import Screenshot3 from "../../assets/images/Screenshot3.png"
import Screenshot4 from "../../assets/images/Screenshot4.png"
function Start() {
    return(
  <>
      <div className="container">
<div className="box">
    <div className="log">
    <div className="row">
<div className="column"></div>
<div className="column"></div>
<div className="column"></div>
<div className="column"><Link to={'/Login'}><button className='button'> Login</button></Link> </div>

     <marquee behavior="movement" direction="left"><h2 className='center font-bold '>Welcome To Your LD Cockpit</h2></marquee> 
        <h3 className='canter text-center font-bold'>What do you want to create  ?</h3>
        
          <p><h4>
            Ramp up your document design with our huge range of assets. Tap into over 40 charts, graphs, maps, tables, data widgets and icons to transform stats and figures into snackable visuals in your documents.
          </h4></p>

</div>
    </div>
    </div>   



    <div className="left">
        <Link to={'/ViewAllResume'}>
        <div className="borderResume">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Resume Builder</h2>
        </div></Link>
        </div>
        {/* 2 */}
        <div className="left">
        <Link to={'/ViewAllLetter'}>
        <div className="borderLetter">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Cover Letters Builder</h2>
        </div>
        </Link>
        </div>
        {/* 3 */}
        <div className="left">
        <Link to={'/ViewAllLetter'}>
        <div className="borderEnvitation">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Envitation Builder</h2>
        </div>
        </Link>
        </div>
        {/* 4 */}
        <div className="left">
        {/* <Link to={'/ViewAllLetter'}> */}
        <div className="borderPresent">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Presentation Builder</h2>
        </div>
        {/* </Link> */}
        </div>
        <div className="left">
        <div className="borderPresent">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>New Presentation </h2>
        </div>
        </div>

{/* Resume */}
<br />

<div className="container">
    <h2 className='font-bold text-center '>Resume</h2>
    <p><label htmlFor="resume">New Tampletes</label> </p>
    <div className="box">
        
        <div className="left"><Link to={'/Bresume'}>
        <img src={Screenshot6} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Cresume'}>
        <img src={Screenshot3} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Dresume'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Eresume'}>
        <img src={Screenshot} className='sideImage' alt="" />    
        </Link>
        </div>
        <div className="left"><Link to={'/Aresume'}>
        <img src={Screenshot} className='sideImage' alt="" />    
        </Link>
        </div>
    </div>
</div>
<br /><hr />
<div className="container">
    <h2 className='font-bold text-center '>Letters</h2>
    <p><label htmlFor="resume">New Tampletes</label> </p>
    <div className="box">
        
        <div className="left"><Link to={'/Aletter'}>
        <img src={Screenshot4} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Bletter'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Cletter'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Dletter'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Eletter'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
    </div>
</div>

<br /><hr />
<div className="container">
    <h2 className='font-bold text-center '>Envitation</h2>
    <p><label htmlFor="resume">New Tampletes</label> </p>
    <div className="box">
        
        <div className="left"><Link to={'/AEnvitation'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/BEnvitation'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/CEnvitation'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/DEnvitation'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/EEnvitation'}>
        <img src={Screenshot} className='sideImage' alt="" />
        </Link>
        </div>
    </div>
</div>
<br /><hr />
<h2 className='font-bold text-center'>Start for free</h2>

    </div>


  </>
  )
}

export default Start