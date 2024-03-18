import React, { useState } from 'react'
import FormInput from "../../components/action/FormInput"
import { Link, useNavigate } from "react-router-dom";
import Bresume from '../../posts/single view/resume/Bresume';
function Startfree() {
  const [values,setValues] = useState({
    fullname:"",
    email:"",
    tel:"",
    zipp:"",
    web:"",
    Oblectives:"",
    Skills:"",
    Communication:"",
    Leadership:"",
    School:"",
    Educomment:"",
    Refernce:"",
    title:"",
    refTel:"",
   
  });
  // const [values,setValues] = useState({
  //   fullname:"",
  //   email:"",
  //   tel:"",
  //   zipp:"",
  //   web:"",
   
  // });
  // const Navigate =useNavigate()
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
      name:"zipp",
      type:"text",
      placeholder:"City,Zipp Code",
      errorMessage:"Zipp Code Needed",
      label:"City,Zipp Code",
      required:true
    },

    {
      id:4,
      name:"tel",
      type:"tel",
      placeholder:"phone number",
      errorMessage:"phone number must be 10 numbers",
      label:"Your phone number",
      required:true,
    },
    {
      id:5,
      name:"Web",
      type:"site",
      placeholder:"Website",
      label:"Your Website",
      required:false,
    },
    

  ];

// Abilities
const input=[
  {
    id:1,
    name:"Oblectives",
    type:"text",
    placeholder:"Objectives",
    label:"Why to write this",
    required:false
  },
  {
    id:2,
    name:"Skills",
    type:"text",
    placeholder:"Skills And Abilities",
    errorMessage:"Skills area are more important",
    label:"What your are able to do",
    required:true
  },

  {
    id:3,
    name:"Communication",
    type:"text",
    placeholder:"communication skills",
    errorMessage:"Community skills Needed",
    label:"Communication Skills",
    required:true
  },

  {
    id:4,
    name:"Leadership",
    type:"text",
    placeholder:"Leadership skills",
    errorMessage:"leadership skills needed",
    label:"Leadership skills",
    required:true,
  },
  {
    id:5,
    name:"School",
    type:"text",
    placeholder:"School-Location-degree",
    errorMessage:"Your Academic profile needed",
    label:"Your Academic profile",
    pattern:"text-text-text",
    required:true,
  },
  {
    id:6,
    name:"Educomment",
    type:"text",
    placeholder:"Educational comments",
    label:"Your education comments",
    required:false,
  },
  {
    id:7,
    name:"Refernce",
    type:"text",
    placeholder:"Reference Name",
    errorMessage:"Your Reference Name needed",
    label:"Your refernce name",
    required:true,
  },
  {
    id:8,
    name:"title",
    type:"text",
    placeholder:"Title , Company",
    errorMessage:"Your Reference Title needed",
    label:"Your refernce details",
    required:true,
  },
  {
    id:9,
    name:"refTel",
    type:"tel",
    placeholder:"Refernce Telephone",
    errorMessage:"Your Reference Tel needed",
    label:"Your Reference Telephone",
    required:true,
  },

];

  const handleSubmit = async(e) =>{
    e.preventDefault();
  console.log(values);
  }
  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  const Info = true
  const [infoOpen, setInfoOpen] = useState(false)
  const close = () => {
    setInfoOpen(false)
  }
  // objectives
  const Obj = true
  const [objOpen, setObjOpen] = useState(false)
  const cls = () => {
    setObjOpen(false)
  }
  return (
    <> 
    <div className="card">
    <div className="left">
    <div className="new">
          <Bresume />
      </div>
        </div>
<div className="left">
<div className='Opps'>
        {Info ? (
          <div>
            <p className='img' onClick={() => setInfoOpen(!infoOpen)}>
          <button className="button" >Personal Info</button>
            </p>
            {infoOpen && (
              <div className='Items' onClick={close}>
             
             <div className="app">
   
   <form onSubmit={handleSubmit} >
    
     <h1>Personal Info</h1>
     {inputs.map((input)=>(
       <FormInput key={input.id}
       {...input}value={values[input.name]}
       onChange={onChange} />
     ))}
     <button className="btn">Submit</button>
   
   </form>
 </div>

              </div>
            )}
          </div>
        ) : (
          <Link to={'/Login'}><button type="button">Login</button></Link>
        )}
      </div>

{/* Objective */}
<div className='Oopps'>
        {Obj ? (
          <div>
            <p className='img' onClick={() => setObjOpen(!objOpen)}>
          <button className="button" >Social Info</button>
            </p>
            {objOpen && (
              <div className='Items' onClick={cls}>
             
             <div className="app">
   
   <form onSubmit={handleSubmit} >
    
     <h1>Ability Info</h1>
     {input.map((input)=>(
       <FormInput key={input.id}
       {...input}value={values[input.name]}
       onChange={onChange} />
     ))}
    
    <button className="btn">Submit</button>
   </form>
 </div>

              </div>
            )}
          </div>
        ) : (
          <Link to={'/Login'}><button type="button">Login</button></Link>
        )}
      </div>









  

</div>
      
 </div>


        
    </>
  )
}

export default Startfree