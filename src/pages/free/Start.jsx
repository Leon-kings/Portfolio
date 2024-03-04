import React from 'react'
import {BsUiChecks , BsSave , BsArrowBarUp } from 'react-icons/bs'
import Screenshot from "../../assets/images/Screenshot.png"
function Start() {
    return(
  <>
      <div className="container">
        <div className="box">
            <div className="row">
                <div className="column">
                <BsUiChecks className='icon' />
                <p className='font-bold'>Share Documents Online</p>
                <p>Share as link on email , Whatsapp or your favoulite productivity tools , post on or embeded to your websites or intranet</p>
                </div>
                <div className="column">
                <BsUiChecks className='icon' />
                <p className='font-bold'>Secure Documents privately</p>
                <p>Generate an incrypted non indexed link to keep your password secure</p>
                </div>
                <div className="column">
                <BsSave className='icon' />
                <p className='font-bold'>Download Documents To use it Offline</p>
                <p>Use offline as PDF or an image</p>
                </div>
                <div className="column">
                <BsArrowBarUp className='icon' />
                <p className='font-bold'>View Documents </p>
                <p>Use Online as PDF or an image</p>
                </div>
            </div>
           
        </div>
    </div>
    <div className="container">
      <div className="box">
        <div className="row">
          <div className="column">
            <img src={Screenshot} style={{width:"250px"}} alt="" />
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default Start