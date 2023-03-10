import React, { useState} from 'react';
import { Container } from "react-bootstrap";

function Postformvalue(props)
{
  const [formvalue, setFormvalue]= useState({name:'',email:'', password:'' });

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
    //console.log(formvalue);
  }
  const handleFormsubmit= async (e)=>{
    e.preventDefault();
    
   await fetch('http://localhost:8090/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
		  name:formvalue.name,
        email: formvalue.email,
        password: formvalue.password
      })
    });
   console.log("success");

  }

    return(
        <React.Fragment>
             <Container>
          <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="mt-3 mb-3  text-white">
            Post Form Data to Fetch API with React JS

            </h5>
            
            <form className='row' onSubmit={ handleFormsubmit}>            
                <div className="col-md-3">  
                <label className="form-label text-white">Name</label>              
                <input  type="text" name='name' value={formvalue.name} onChange={ handleInput}  className='form-control'  placeholder='Name...' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white">Email</label>              
                <input  type="text" name='email' value={formvalue.email } onChange={ handleInput}  className='form-control'  placeholder='Email...' />
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white">Password</label>              
                <input  type="password" name='password' value={formvalue.password} onChange={ handleInput}  className='form-control'  placeholder='Password...' />
              </div>
              <div className="col-md-2">  
                <label className="form-label text-white">Action</label>              
                <button className='form-control btn btn-success '>Submit</button>
              </div>


               </form>

            </div>
        </div>
        </Container>
        </React.Fragment>
    );
}

export default Postformvalue;