import React from 'react'
import { BsArrowBarDown,  BsInputCursorText, BsUiChecks, BsSave, BsQuote, BsArrowBarUp } from 'react-icons/bs'
import g from "../../assets/images/g.jpg"
import { user } from '../../assets/data/user/data'
import "../../assets/css/specific.css"
import Screenshot5 from "../../assets/images/Screenshot5.png"
import Screenshot from "../../assets/images/Screenshot.png"

// posts
import Official from "../side-parts/letters/legal/Official"
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
   <div className="app">
    <div className="container">
        <div className="box">
           <div className="left">
            <h1 className='title font-bold '>Unleash your full potential</h1>
            <p>Take your Career to New Height with our AI -Boosted</p>
            <p>All-in-One Platform . Start for Free and Ejevate with</p>
            <p>Premium Option</p>
            <Link to={'/Startfree'}>
            <button className="button font-bold"><BsArrowBarDown className='icon' />Get Started - It's Free</button>
            </Link>
           </div>
           {/* second part */}
           <div className="left">
            <img src={g} alt="side-bar-image" style={{width:"49%"}} className='side' />
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
            <img src={g} alt="" className='sideImage' />
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
            <button className="button">Create Own now</button>
        </div>
    </div>
</div>
{/* checkbox */}

<div className="container">
    <div className="info">
        <h3 className="text-center">The versatile online Documents software that will Streamline the creation of your <b>proposals , report , white papers , ebooks</b> and types of Document</h3>
    </div>
    <div className="image">
    <div className="box">
        
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image' className='img-side' /></div>
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image'  className='img-side' /></div>
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image' className='img-side' /></div>
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image'   className='img-side' /></div>
            <div className="left"><img src={Screenshot} alt="side" id='hidd-side-image' className='img-side' /></div>
        </div>

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
      <button className="button">Create Your Own Docs</button>
      <button className="button" id='side-button'>View Our Tampletes</button>
        
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

<div className="row">
  <div className="column">
    <h2>Jobs Official Letters</h2>
    <Official />
  </div>
  
  <div className="column">
    <h2>Students Application Letters</h2>
    <Official />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p> */}
  </div>
  
  <div className="column">
    <h2>Weddinng Envitation</h2>
    <Official />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p> */}
  </div>
  <div className="column">
    <h2>Lunch / Dinner Envitation</h2>
    <Official />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p> */}
  </div>
  <div className="column">
    <h2>Resumes</h2>
    <Official />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p> */}
  </div>

</div>






</div>
    </div>
  
   
   </>
  )
}

export default Home