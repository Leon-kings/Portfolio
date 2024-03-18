import React from 'react'
import { Link } from 'react-router-dom'
import Screenshot6 from "../../../assets/images/Screenshot6.png"
import Screenshot3 from "../../../assets/images/Screenshot3.png"
import Screenshot from "../../../assets/images/Screenshot.png"
function ViewAllResume() {
  return (
    <>
    <div className="card">
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
        <div className="left">
        <img src={Screenshot} className='sideImage' alt="" />
        </div>
        <div className="left">
        <img src={Screenshot} className='sideImage' alt="" />
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default ViewAllResume