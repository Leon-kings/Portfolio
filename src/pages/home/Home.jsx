import React, { useState } from 'react'
import { BsArrowBarDown,  BsInputCursorText, BsUiChecks, BsSave, BsQuote, BsArrowBarUp } from 'react-icons/bs'
import g from "../../assets/images/g.jpg"
import { user } from '../../assets/data/user/data'
import "../../assets/css/specific.css"
// images
import Screenshot5 from "../../assets/images/Screenshot5.png"
import Screenshot1 from "../../assets/images/Screenshot1.png"
import Screenshot2 from "../../assets/images/Screenshot2.png"
import Screenshot from "../../assets/images/Screenshot.png"
import Formal_letter from "../../assets/images/Formal_letter.png"
import Screenshott from "../../assets/images/Screenshott.png"
import ScreenshotN from "../../assets/images/ScreenshotN.png"
import screenshot from "../../assets/images/screenshot.jpg"
import OfficialBusinessLetter from "../../assets/images/OfficialBusinessLetter.jpg"
import screenshot3 from "../../assets/images/screenshot3.jpg"
import screenshot2 from "../../assets/images/screenshot2.jpg"
// posts

import { Link } from 'react-router-dom'
function Home() {
    const Quest = true
    const [Open, setOpen] = useState(false)
    const [Ope, setOpe] = useState(false)
    const close = () => {
      setOpen(false)
    }
  return (
   <>
   <div className="app">
    <div className="container">
    <h3>Everything to spice up your documents</h3>
          <p><h4>
            Ramp up your document design with our huge range of assets. Tap into over 40 charts, graphs, maps, tables, data widgets and icons to transform stats and figures into snackable visuals in your documents.
          </h4></p>
        <div className="box">
           <div className="left">
            <h1 className='title font-bold '>Unleash your full potential</h1>
            <p>Take your Career to New Height with our AI -Boosted</p>
            <p>All-in-One Platform . Start for Free and Ejevate with</p>
            <p>Premium Option</p>
            <Link to={'/free'}>
            <button className="button font-bold"><BsArrowBarDown className='icon' />Get Started - It's Free</button>
            </Link>
           </div>
           {/* second part */}
           <div className="left">
            <img src={Screenshott} alt="side-bar-image"   className='sideImage' />
           </div>
        </div>
        {/* 1 end */}

        {/* 2 starts */}
        <div className="box">
<div className="user">
<div className='image'>
    <div className='img'>
    {user.map((a)=>(
                 
                      <img src={a.url} alt='' id={a.id} />
                    
))}
<span className='user-span font-bold'> <b>Liked by 1.2 millions</b></span>
    </div>             
     </div>
</div>
</div>
{/* user space end */}


{/* category products  starts*/}
<div className="box">

    {/* category start */}
<div className="container">
    <div className="left">
        <div className="borderResume">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Resume Builder</h2>
        </div>
        </div>
        {/* 2 */}
        <div className="left">
        <div className="borderLetter">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Cover Letters Builder</h2>
        </div>
        </div>
        {/* 3 */}
        <div className="left">
        <div className="borderEnvitation">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Envitation Builder</h2>
        </div>
        </div>
        {/* 4 */}
        <div className="left">
        <div className="borderPresent">
            <BsInputCursorText className='icon'/>
            <h2 className='text-center font-bold '>Presentation Builder</h2>
        </div>
        </div>
    </div>
</div>

{/* side-bar of content */}
<div className="container">
<div className="box">
    
        <div className="left">
            <h1 className='text-4xl font-bold'>Showcase Yourself</h1>
        </div>

        <div className="left">
            <p><b> Flow CV is more than just resume builder - It's revolutional part designed to evaluate your job research experience.Our focus is to more empowering job seekers like you to present their full potentials,and secure their dreams roles, all while saving time and enjoying the process as much as we have enjoying create it.</b></p>
            <p><b>Flow CV is more than just resume builder - It's revolutional part designed to evaluate your job research experience.Our focus is to more empowering job seekers like you to present their full potentials,and secure their dreams roles, all while saving time and enjoying the process as much as we have enjoying create it.</b></p>
        </div>
    </div>
</div>

 {/* side-bar of content ends */}

{/* side-content-images starts */}
<div className="container">
    <div className="box">
        <div className="left">
            <img src={screenshot2} alt="" className='sideImage' />
        </div>

        <div className="left">
            <div className="box">
            <div className="left">
                <div className="sideA">
                    <p>Unlock your world of opportunities to shape your Career journey</p>
                </div>
            </div>

            <div className="left">
                <div className="sideB">
                    <p>Effortless Application Creation</p>
                </div>
            </div>
            {/* <br /> */}
            </div>
            <div className="whole">
            <div className="full">
                <p>Became the standout candidate to potentials employee</p>
            </div>
            </div>
{/* side-bar-inside-one */}
            <div className="box">
            <div className="left">
                <div className="sideB">
                   <p>Confidence strengthned by personal Banding</p> 
                </div>
            </div>

            <div className="left">
                <div className="sideA">
                <p>Streamlined application creation , freeing up more time for your preparation</p>
                </div>
            </div>
            {/* <br /> */}
            </div>


        </div>
    </div>
</div>

{/* side-content-images starts */}


{/* tamplete-side-flow */}

<div className="container">
    <div className="box">
        <div className="left">
            <h2 className='font-bold text-center'>Customizable Tampletes</h2>
            <p>Unleash possibilities with FlowCV's thoughtfully designed tamplete.Whether for:</p> <ul>
                <li> <b>Resume</b> </li>
                <li> <b>Cover Letters</b></li>
                <li> <b>Envitation Card</b></li>
                </ul> 
                <Link to={'/tampletes'}>
            <button className="button"> <BsArrowBarDown className='icon' /> See All Tampletes</button></Link>  
        </div>
        <div className="left">
<div className="sideImage">
    <img src={Screenshot5} alt="" className="sideImage" />
</div>
        </div>
    </div>
</div>

        {/* testmonies */}
<div className="container">
    <div className="box">
<div className="left">
    <img src={Screenshot} alt="" className='sideImage'/>
</div>

        <div className="left">
            <p><button className="btn">Create</button>&gt;Document</p>
            <h2 className='font-bold text-center'>Make Proffesional Visual Documents In A Minutes</h2>
            <form className='form'>
                <div>
                <input type="checkbox" name="docs" id="docs" checked />
                <label htmlFor="docs">Easy-to-customize Documents</label>
                </div>
                <div>
                <input type="checkbox" name="docs" id="docs" checked />
                <label htmlFor="docs">Get all our Tampletes you need</label>
                </div>
                <div>
                <input type="checkbox" name="docs" id="docs" checked />
                <label htmlFor="docs">Create your Documents right now</label>
                </div>
            </form>
           <Link to={'/CreateResume'}> <button className="button">Create Own now</button></Link>
        </div>
    </div>
</div>
{/* checkbox */}

<div className="container">
    <div className="info">
        <h3 className="text-center">The versatile online Documents software that will Streamline the creation of your <b>proposals , report , white papers , ebooks</b> and types of Document</h3>
    </div>
    <div className="image">
  
        
            <div className="left"><img src={Screenshot1} alt="side" id='hidd-side-image' className='sideImage' /></div>
            <div className="left"><img src={ScreenshotN} alt="side" id='hidd-side-image'  className='sideImage' /></div>
            <div className="left"><img src={Screenshot2} alt="side" id='hidd-side-image' className='sideImage' /></div>
            <div className="left"><img src={Screenshot5} alt="side" id='hidd-side-image'   className='sideImage' /></div>
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image' className='sideImage' /></div>
            
        </div>


</div>

{/* Services we provide */}
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
    {/* buttons */}
<div className="container">
    <div className="box font-bold text-center">
    <Link to={'/free'}>  <button className="button">Create Your Own Docs</button></Link>
     <Link to={'/tampletes'}> <button className="button" id='side-button'>View Our Tampletes</button></Link>
        
    </div>
</div>

{/* comments */}

    <div className="container"> 
        <div className="comments">
           <div className="box">
                <div className="left">
                    <h2 className='font-bold text-center'>Leon</h2>
                    <p><BsQuote/>I give LD two thumbs,because it is easy to use and low running curve.Thank you for a great products! <BsQuote/></p>
                </div>
                <div className="left">
                <h2 className='font-bold text-center'>Neol</h2>
                    <p><BsQuote/>LD is clean and integarated as I wanted it,so please make an improoove to some of your Tampletes! <BsQuote/></p>
                </div>
                <div className="left">
                <h2 className='font-bold text-center'>Loen</h2>
                    <p><BsQuote/>I give LD two thumbs,because You make me employee from your Tampletes I used it and now am happy! <BsQuote/></p>
                </div>
            </div>
        </div>
    </div>
{/* new */}
{/* <div className="container">
<div className="row">
  <div className="column">
<img src={ScreenshotN}  alt="" />
    
  </div>
</div>
<div className="row">
  <div className="column">
<img src={Screenshot1} alt="" />
    
  </div>
</div>
</div> */}
<div className="container">
    <div className="box">
        <div className="left">
        <img src={ScreenshotN} className='sideNewImage'  alt="" /> 
        </div>
    </div>
</div>
{/* categoty */}
<div className="container">
    <p className='font-bold'><i><u><b>Resume</b> </u> </i> </p>
    <p>Our easy-to-use, fully customizable document templates give you a quick and easy starting point to create your documents. Our hundreds of professionally designed document templates contain carefully researched and crafted content to make it easier for you to create your next document.</p>
    <div className="box">
        <div className="left">
            
          <button className="button">Create Yours Now</button>
          <img src={Screenshot1} className='sideNewImage'  alt="" />
          
           </div>
        <div className="left" >
        <img src={Screenshot2} className='sideNewImage'  alt="" /> 
        <button className="button">Create Your Resume</button>
        <button className="button">View All Tampletes</button>
        </div>
    </div>
</div>

{/* letters */}
<div className="container">
    <p className='font-bold'><i><u><b>Letters</b> </u> </i> </p>
    <p>Our easy-to-use, fully customizable document templates give you a quick and easy starting point to create your documents. Our hundreds of professionally designed document templates contain carefully researched and crafted content to make it easier for you to create your next document.</p>
    <div className="box">
        <div className="left">
            
          <button className="button">Create Yours Now</button>
          <img src={Formal_letter} className='sideNewImage'  alt="" />
          
           </div>
        <div className="left" >
        <img src={OfficialBusinessLetter} className='sideNewImage'  alt="" /> 
        <button className="button">Create Your Resume</button>
        <button className="button">View All Tampletes</button>
        </div>
    </div>
</div>

{/* envitation */}
<div className="container">
    <p className='font-bold'><i><u><b>Envitations</b> </u> </i> </p>
    <p>Our easy-to-use, fully customizable document templates give you a quick and easy starting point to create your documents. Our hundreds of professionally designed document templates contain carefully researched and crafted content to make it easier for you to create your next document.</p>
    <div className="box">
        <div className="left">
            
          <button className="button">Create Yours Now</button>
          <img src={screenshot} className='sideNewImage'  alt="" />
          
           </div>
        <div className="left" >
        <img src={screenshot3} className='sideNewImage'  alt="" /> 
        <button className="button">Create Your Resume</button>
        <button className="button">View All Tampletes</button>
        </div>
    </div>
</div>
{/* new part */}
<div className="container">
    <div className="box">
        <div className="left">
            <h2>Transform Your Job Search Into a Career Triumph</h2>
            <br />
            <p>Where You're Not Seen.</p>
            <h4>You're <p style={{color:"darkred"}}>Remembered</p></h4>
        </div>
        {/* side */}
        <div className="left">
            <h3 className="font-bold">Define Your Career Path</h3>
            <p>Why Settle for Average When You Can Have ExtraOrdinary with LD CV?
            Don't Just Seek for a Job. <p> Command your Career feed up with Faceless application and Unforgettable Resumes?</p>
             Unveil Your Full Potential With LD CV ,Your Secret Weapon for Owning Job Market .We are not just CV Builder ,We are also Career Catalyst </p>
             <br />
            
             <h3 className="font-bold">Level Up With Real-Time Industry Insight </h3>
             <p>Our Obsession With Innovation Ensure You're Never Playing Catch-Up.Get real-time Insight on industry</p> 
             <p> demands And Employee Desires , equipping you to dominate Your Job Search Journey </p>
        </div>
    </div>
</div>
  {/* Question page */}
  <div className="container">
  <h3 className='font-bold text-center'>Frequently asked Question</h3>
    <div className="box">
   <form className='form'>
   
        {Quest ? (
          <div>
            <div className="left">
            <h4>What does LD Offer?</h4>
            <label className='Qtn' onClick={() => setOpen(!Open)}>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
         <label className='font-bold'><b> Ans</b></label>
            </label>
            </div>
            <div className="left">
            {Open && (
              <p className='open ' id='blanck' >
            <ol>
   
  <li>
   <label htmlFor="docs">Production Documents</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
   <li>
   <label htmlFor="docs">Agricultural Documents</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
  <li>
   <label htmlFor="docs">Proffessional Documents</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
   </ol>

       
                
   
              </p>
            )}
          </div></div>
        ) : (
          <button type="button">Start for free</button>
        )}
    

       
    {Quest ? (
          <div>
            <div className="left">
            <h4>Can I use CV for Free?</h4>
            <label className='Qtn' onClick={() => setOpen(!Ope)}>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
         <label className='font-bold'><b> Ans</b></label>
            </label>
            </div>
            <div className="left">
            {Open && (
              <p className='open ' id='blanck' >
            <ol>
   
  <li>
   <label htmlFor="docs">Yes</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
   <li>
   <label htmlFor="docs">No</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
 
   </ol>

       
                
   
              </p>
            )}
          </div></div>
        ) : (
          <button type="button">Start for free</button>
        )}


{Quest ? (
          <div>
            <div className="left">
            <h4>Can I use CV for Free?</h4>
            <label className='Qtn' onClick={() => setOpen(!Open)}>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
         <label className='font-bold'><b> Ans</b></label>
            </label>
            </div>
            <div className="left">
            {Open && (
              <p className='open ' id='blanck' >
            <ol>
   
  <li>
   <label htmlFor="docs">Yes</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
   <li>
   <label htmlFor="docs">No</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
 
   </ol>

       
                
   
              </p>
            )}
          </div></div>
        ) : (
          <button type="button">Start for free</button>
        )}


{Quest ? (
          <div>
            <div className="left">
            <h4>Can I use CV for Free?</h4>
            <label className='Qtn' onClick={() => setOpen(!Open)}>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
         <label className='font-bold'><b> Ans</b></label>
            </label>
            </div>
            <div className="left">
            {Open && (
              <p className='open ' id='blanck' >
            <ol>
   
  <li>
   <label htmlFor="docs">Yes</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
   <li>
   <label htmlFor="docs">No</label>
   <input type="checkbox" name="prodocs" id="docs" /></li>
 
   </ol>

       
                
   
              </p>
            )}
          </div></div>
        ) : (
          <button type="button">Start for free</button>
        )}


   </form>
   {/* <form action="" method="get">
    <div className="left"><ul typeof='1'><li><label htmlFor="docs"> What does LD offers?</label></li></ul>  </div>
   <div className="left">
    <ol>
   
    <br /><li>
    <label htmlFor="docs">Production Documents</label>
    <input type="checkbox" name="prodocs" id="docs" /></li>
    <br /><li>
    <label htmlFor="docs">Agricultural Documents</label>
    <input type="checkbox" name="prodocs" id="docs" /></li>
    <br /><li>
    <label htmlFor="docs">Proffessional Documents</label>
    <input type="checkbox" name="prodocs" id="docs" /></li>
    </ol>
   </div>
    
   <div className="left"><ul><li><label htmlFor="free"> Can I use CV for Free?</label></li></ul>  </div>
   <div className="left">
    <ol>
   
    <br /><li>
    <input type="checkbox" name="prodocs" id="docs" /> &nbsp;
    <label htmlFor="docs">Yes</label>
    </li>
    <br /><li>
    <input type="checkbox" name="prodocs" id="docs" /> &nbsp;
    <label htmlFor="docs">Not</label>
    </li>

    </ol>
   </div>

  </form> */}
    </div>
  </div>
  
    {/* Last events */}
    <div className="container">
        <h2 className="font-bold text-center">Start Building Your Future</h2>
        <div className="box">
        <h4>Unveil Your Full Potential With Friendly Tampletes ,Non Scammy Resumes and Career Tools . Start Building 
            Your Documents for Free And Soon Premium enhance will Start Used.
             </h4>
            
    </div>
    <button className="button"><BsArrowBarUp /> Start Now</button>
    </div>
 








</div>
    </div>
  
   
   </>
  )
}

export default Home