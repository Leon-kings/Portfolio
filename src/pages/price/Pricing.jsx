import React from 'react'
import { Bs0CircleFill, BsCurrencyBitcoin, BsFileCheck, BsInstagram} from 'react-icons/bs'
import Screenshot from "../../assets/images/Screenshot.png"
import { Link } from 'react-router-dom'
function Pricing() {
  return (
    <>
 
   <div className="container">
    <div className="box">
      <div className="left">
        <h2 className="center">Pricing</h2>
        <hr />
        <p className="text-center">Simple Tools, Simple Prices. LD is Ultimate Career Companion.Utilize LD to Effortless Craft Polished Resumes , stricking Application , Cover Letters .</p>
       </div>
       <hr className="center" />
       <div className="left">
        <div className="image">
       <img src={Screenshot} alt="" className="cycle" />
       </div>
       
       </div>
      
    </div>

   </div>
   <div className="container">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Free</th>
              <th>Basic</th>
              <th>Premium</th>
             
            </tr>
          </thead>
          <br />
          <tbody>
            <tr>
              <td>Resume is Unlimited Download</td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
            </tr>
            <br />
            <tr>
              <td>Letters is Unlimited Download</td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
            </tr>
            <br />
            <tr>
              <td>Envitation is Unlimitted Download</td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
              <td><BsFileCheck /> </td>
            </tr>
           <br />
            <tr>
              <td>Presentation is unlimmitted</td>
              <td><Bs0CircleFill /> </td>
              <td><Bs0CircleFill /> </td>
              <td><BsFileCheck /> </td>
            </tr>
            <tr>
              <td></td>
              <td><b style={{color:"blue"}}><Link to={'/free'}> 
              <button className="btn">Free</button></Link></b>
              <p><label htmlFor="view">Free</label> </p>
              </td> 
              <td><b style={{color:"blue"}}>
              <button className="button">Basic</button>
                </b>
                <p><label htmlFor="view">Bitcoin 9 per year</label> </p>
                 </td> 
              <td><b style={{color:"blue"}}>
              <button className="button">Premium</button></b> 
              <p><label htmlFor="view">Bitcoin 15 per year</label> </p>
              </td> 
            </tr>
            <tr>
              <td></td>
              <td><b style={{color:"blue"}}> <BsCurrencyBitcoin/>0</b> </td> 
              <td><b style={{color:"blue"}}> <BsCurrencyBitcoin/> 9</b> </td> 
              <td><b style={{color:"blue"}}><BsCurrencyBitcoin/> 15</b> </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}

export default Pricing