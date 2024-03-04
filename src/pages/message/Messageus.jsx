import React, { useEffect, useState } from 'react'
import FormInput from "../../components/action/FormInput"

import Screenshot from "../../assets/images/Screenshot.png"
function Messageus() {
    const [values,setValues] = useState({
 
        email:"",
    
       comment:"",
      
      });
      
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
          name:"comment",
          type:"text area",
          placeholder:"Your Comment",
          errorMessage:"Comment should be 8-1200 characters ",
          label:"Message",
        
          required:true
        },
      ];
    
    // fetching data from database
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
  <div className="ap">
            <div className="row">
                <div className="column">
                
    
      <form className='form' onSubmit={handleSubmit}>
        <h1>Messages</h1>
        <br />
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <button className="btn">Submit</button>
     
        
      </form>
      
    
    </div>
                </div>
                {/* <div className="column">
                <img src={Screenshot} className="sideImage" alt="" />
                </div> */}
            </div>
<br />

    </>
  )
}

export default Messageus