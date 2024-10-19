import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreateStudent() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [idStud, setIdStud] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/create',{name, email,idStud})
          .then(res => {
            console.log(res);
            navigate('/students'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Shto nje Student</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> ID e studentit : </strong></label> 
            <input type="idStud" placeholder='Enter students ID' class="inp"
             onChange={e => setIdStud(e.target.value)}/> 
              </div>
              <br></br>
            <div className='mb-2'> 
            <label htmlFor=""> <strong> Emri : </strong></label> 
            <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/>
            </div> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Email : </strong></label> 
            <input type="email" placeholder='Enter Email' class="inp"
             onChange={e => setEmail(e.target.value)}/> 
              </div>
              <br></br>
               <button  class="butoni">Submit</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreateStudent