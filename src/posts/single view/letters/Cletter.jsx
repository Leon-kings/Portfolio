import React from 'react'
import Official from "./component/Official"
import { Link } from 'react-router-dom'
function Cletter() {
  return (
 <>
      <div className="card">
<div className="box">
            <div className="left">
                
          
              <Official />
           
         
            </div>
            <div className="left">
              <h3 className='font-bold'>LD Resume Builder space .</h3>
              <p>Thank you to select this Tampletes.LD wish you regalds</p>
              <hr />
              <p>Each Tamplete have been crafted according to request of the Users.</p>
              <br />
              <ul>
                <li>A4 / US-English Letters</li>
                <li>Editable Text where needed</li>
                <li>Print ready</li>
              </ul>
              <Link to={'/Screate'}>
              <button className="button">Use This Tamplete</button>
              </Link>
              <br />
              <br />
              <br /><br />
              <br />
              <br />
              <br /><br />
              <h3 className='font-bold'>Send Admin Request of New Tamplete</h3>
              <p>Press / Click here and Send Your Request to Admin</p>
              <Link to={'/Request'}>
              <button className="btn">Send Request</button>
              </Link>
            </div> 
            </div>

            </div>
 
 </>
  )
}

export default Cletter