import React from 'react'
// import { Screen } from 'tailwindcss/types/config'
import Screenshot from "../../assets/images/Screenshot.png"
import { Link } from 'react-router-dom'

function Tampletes() {
  return (
    <>
    <div className="box">
        <div className="card">
            <nav className='navigation'><ul>
                <li><Link to={'/ViewAllLetter'}> <button className="button">Letters</button> </Link></li>
                <li><Link to={'/ViewAllEnvit'}><button className="button">Envitation</button></Link>  </li>
                <li><Link to={'/ViewAllResume'}><button className="button">Cv/Resume</button></Link>  </li>
                <li><Link to={'/message'}><button className="btn">Message us</button></Link>  </li>
                </ul></nav>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum cumque fugiat eaque, deleniti laboriosam corrupti in sed veritatis sint consequatur expedita maxime possimus delectus, autem quia quo exercitationem eum.</p>
        </div>
   <div className="slide">
    <div className="letters">
        <div className="row">

         <div className="column">
            <div className='box boxItems'>
              <div className='img'>
                <div className="thumb">
                  <div className="inner-content">
                    <p className='font-bold'>Official Job Application</p>
                    <div className="main-border-button">
                      <Link to="/ViewAllLetter">
                        <button className='btn' >View All</button>
                         </Link>

                    </div>
                  </div>
                  <img src={Screenshot} alt="" />
                </div>
              </div>

              </div>
            
          </div>
          <div className="column">
            <div className='box boxItems'>
              <div className='img'>
                <div className="thumb">
                  <div className="inner-content">
                    <p className='font-bold'>Students Application Letter</p>
                    <div className="main-border-button">
                      <Link to="/ViewAllLetter">
                        <button className='btn' >View All</button>
                         </Link>

                    </div>
                  </div>
                  <img src={Screenshot} alt="" />
                </div>
              </div>

              </div>
            
          </div>

          <div className="column">
            <div className='box boxItems'>
              <div className='img'>
                <div className="thumb">
                  <div className="inner-content">
                    <p className='font-bold'>Resume</p>
                    <div className="main-border-button">
                      <Link to="/ViewAllResume">
                        <button className='btn' >View All</button>
                         </Link>

                    </div>
                  </div>
                  <img src={Screenshot} alt="" />
                </div>
              </div>

              </div>
            
          </div>

          <div className="column">
            <div className='box boxItems'>
              <div className='img'>
                <div className="thumb">
                  <div className="inner-content">
                    <p>Wedding Envitation</p>
                    <div className="main-border-button">
                      <Link to="/ViewAllEnvit">
                        <button className='btn' >View All</button>
                         </Link>

                    </div>
                  </div>
                  <img src={Screenshot} alt="" />
                </div>
              </div>

              </div>
            
          </div>

          <div className="column">
            <div className='box boxItems'>
              <div className='img'>
                <div className="thumb">
                  <div className="inner-content">
                    <p>Dinner Envitation</p>
                    <div className="main-border-button">
                      <Link to="/ViewAllEnvit">
                        <button className='btn' >View All</button>
                         </Link>

                    </div>
                  </div>
                  <img src={Screenshot} alt="" />
                </div>
              </div>

              </div>
            
          </div>



        </div>
    </div>
   </div>
  
    
    </>
  )
}

export default Tampletes