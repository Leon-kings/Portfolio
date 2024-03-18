import React, {  useState } from 'react'
import Screenshot4 from "../../../../assets/images/Screenshot4.png"
import Screenshot from "../../../../assets/images/Screenshot.png"
import Screenshot3 from "../../../../assets/images/Screenshot3.png"
import Screenshot6 from "../../../../assets/images/Screenshot6.png"
import FormInput from "./FormInput"
import { BsInputCursorText, BsLinkedin, BsViewList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
  const Create =()=>{



    const [values,setValues] = useState({
 
     
      social:"",
      names:"",
      tel:"",
      location:"",
      receiveraddress:"",
      receivertitle:"",
      date:"",
      experience:"",
      academic:"",
     
     });
    //  const Navigate =useNavigate();
     const inputs=[
     
     
      {
        id:1,
        name:"names",
        type:"names",
        placeholder:"Enter your name",
        errorMessage:"Your names are needed",
        label:"Yours names",
        required:true
      },
      {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Enter your email",
        errorMessage:"Your email are needed",
        label:"Yours email",
        required:true
      },
      {
        id:3,
        name:"social",
        type:"text",
        placeholder:"social",
        errorMessage:"social is not lequired but you can put no problem ",
        label:"LinkedIn ",
      
        required:false
      },
      {
        id:4,
        name:"tel",
        type:"telephone",
        placeholder:"Enter your telephone number",
        errorMessage:"Your numbers are needed",
        label:"Yours phone numbers",
        required:true
      },
     
      {
        id:5,
        name:"location",
        type:"text",
        placeholder:"location like Kigali , Rwanda",
        errorMessage:"location is required ",
        label:"Location",
      
        required:true
      },
      {
        id:6,
        name:"receiveraddress",
        type:"text",
        placeholder:"Enter Receiver address",
        errorMessage:"Reciver adress required",
        label:"Receiver adress required",
        required:true
      },
     
      {
        id:7,
        name:"receivertitle",
        type:"text",
        placeholder:"Director general of LD",
        errorMessage:"Title is required ",
        label:"Receiver titles required",
      
        required:true
      },
      ,
     
      {
        id:8,
        name:"date",
        type:"date",
        placeholder:"Enter date",
        errorMessage:"Date is required ",
        label:"Date is required",
      
        required:true
      },
      ,
     
      {
        id:9,
        name:"experience",
        type:"experience",
        placeholder:"Tell me about your experience",
        errorMessage:"Experience is required ",
        label:"Experience  required",
      
        required:true
      },
      ,
     
      {
        id:10,
        name:"academic",
        type:"academic",
        placeholder:"Tell me about academic background",
        errorMessage:"Academic background is required ",
        label:"Accademic is required",
      
        required:true
      },
     ];
     
   
   

     const handleSubmit = async(e) =>{
      e.preventDefault();
    console.log(values);
   
   
    };
  
  
  
    const onChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value});
    }


return(
 <>
  
 <div className="app">
  <div className="card">
    <div className="box">
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
    <div className="box">
<div className="next">
 <div className="head">
 <div className="left">
            <div>
            
           <div className="right" >
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}}>{values.names}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}} >{values.tel}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}}>{values.address}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}} >{values.email}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}}><BsLinkedin /> {values.social}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}} >{values.location}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"right"}}>On {values.date}</p>
           </div>
           </div>
           <br />
           <br />
           <br />
           <br />
           <div className="left" >
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.receivertitle}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>{values.receiveraddress}</p>
            <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Dear Sir,</p>
           </div>
           <br />
           <br />
           <br />
           <br />
    <div className="ful">
        <h3> <b> <u>RE: Application for School </u></b> </h3>
        <br />
        <p style={{textAlign:"left"}}>I hambly to write this letter to apply job vacancy in a company that you are a head of.</p>
        <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Am Rwandan citizen,{values.academic}
            . </p>
        <p style={{textAlign:"left"}}>{values.experience}.My accademic background are attached on the letter</p>
       
         <br />
         <p style={{padding:"0px",margin:"0px",textAlign:"left"}}>Your Sincierly.</p>
         <p style={{textAlign:"left"}}>{values.names}</p>  
    </div>
   
    <br />
    <br />
 
    <hr />
    <button className="btn">Download</button>
    <br />
    <p><label htmlFor="resume">New Letters Tampletes</label> </p>
    <div className="box">
    
        <div className="left"><Link to={'/Aletter'}>
        <img src={Screenshot4} className='sideImage' alt="" />
        </Link>
        </div>
        <div className="left"><Link to={'/Bletter'}>
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
   
</div>
</div>
           

<div className="left">
<div className="for">
   <form onSubmit={handleSubmit}>
     
     {inputs.map((input)=>(
       <FormInput key={input.id}
       {...input}value={values[input.name]}
       onChange={onChange} />
     ))}
     <button className="btn">Submit</button>
   
     
   </form>
   </div>
 </div>
 </div>




 
        </div>
  </div>

   </>
  )
}

export default Create