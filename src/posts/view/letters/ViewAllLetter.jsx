import React from 'react'
import { Link } from 'react-router-dom'
import Screenshot from "../../../assets/images/Screenshot.png"
function ViewAllLetter() {
  return (
    <>
    <div className="card">
      <div className="box">
      <div className="left"><Link to={'/Aletter'}>
        <img src={Screenshot} className='sideImage' alt="" />
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
    </>
  )
}

export default ViewAllLetter