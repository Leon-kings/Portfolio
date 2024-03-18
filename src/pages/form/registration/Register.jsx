import React, { useEffect } from "react";
import  { useState } from "react";
import Screenshot from "../../../assets/images/Screenshot.png"
import FormInput from "../../../components/action/FormInput"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const App =()=>{
  const [values,setValues] = useState({
    fullname:"",
    email:"",
    phone:"",
    password:"",
   
  });
  const Navigate =useNavigate()
  const inputs=[
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:"full names",
      errorMessage:"Full Names needed ",
      label:"full names",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
 
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"passworx should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
      pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required:true
    },

    {
      id:4,
      name:"telephone",
      type:"phone",
      placeholder:"phone number",
      errorMessage:"phone number must be 10 numbers",
      label:"Your phone number",
      required:true,
    },
    

  ];

// fetching data

const [backendData,setBackEndData]= useState([]);
useEffect(()=>{
  const getData = async() =>{
    const response = await axios.get('https://getcard.onrender.com/users')
if(response){
  setBackEndData(response.data)
}else{
  console.log(response)
}


   }
getData()
}, [])
console.log(backendData);
// fetching ends


  const handleSubmit = async(e) =>{
    e.preventDefault();
  // console.log(values);
    try{
     
    const dt = await axios.post('https://getcard.onrender.com/users',values)
    .then(() =>{
      alert('User Registered successfully');
     Navigate('/login')
      
    })
  }
    catch(err){
      console.log(err)
    }
 
  };



  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return(
    <>
      

    <div className="left">
    <div className="app">
   
      <form onSubmit={handleSubmit} className="form">
       
        <h1>register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <button className="btn">Submit</button>
        <p>If you do have an account got <Link to="/Login"><b>Login</b></Link> </p>
      </form>
    </div>
    </div>
   <div className="left">
    <img src={Screenshot} alt="sideImage-register" className="sideImage" />
   </div>
  
    </>
  )
}
export default App ;