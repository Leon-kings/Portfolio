import  { useEffect, useState } from "react";
import React from "react";
import FormInput from "../action/FormInput"
import {useNavigate} from "react-router-dom"
import Screenshot from "../../assets/images/Screenshot.png"
import { Link } from "react-router-dom";
import axios from "axios";

function Request() {
    const [values,setValues] = useState({
 
        email:"",
        File:"",
        message:"",
      
      });
      const Navigate =useNavigate();
      const inputs=[
      
     
        {
          id:1,
          name:"email",
          type:"email",
          placeholder:"email",
          errorMessage:"email should be valid and should incloude @ symbols",
          label:"email",
          required:true
        },
     
        {
          id:2,
          name:"message",
          type:"text",
          placeholder:"message",
          errorMessage:"message should be needed",
          label:"message",
        
          required:true
        },
        {
            id:2,
            name:"file",
            type:"file",
            placeholder:"file",
            errorMessage:"file should be needed",
            label:"file",
          
            required:true
          },
      ];
    
   
             // handleSubmit
      const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(values);

      }; 
      const onChange =(e) =>{
        setValues({...values,[e.target.name]:e.target.value});
      }
  return (
   <>
   <div className="app">
    <div className="card"> 
    <div className="box">
        <div className="left">
           
        <form className="form" onSubmit={handleSubmit} >
        <h1>Request</h1>
        <br />
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <button className="btn">Submit</button>
        
      </form>
       </div> 
       <div className="left"></div>
       <div className="left">
        <img src={Screenshot} className="sideImage" alt="" />
       </div>
       <div className="left">
        <p><Link to={'/login'}><button className=" button">Login</button></Link> </p>
        <p><Link to={'/tampletes'}> <button className=" button">Browse New Tampletes</button></Link></p>
        
       </div>
       </div>
    </div>
   </div>
   </>
  )
}

export default Request




  

 
     
  