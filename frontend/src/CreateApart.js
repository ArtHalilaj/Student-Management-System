import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreateApart() {
    const [name, setName] = useState('') 
    const [id, setID] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createApart',{name, id})
          .then(res => {
            console.log(res);
            navigate('/student'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Shto nje Apartament</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""> <strong> Adresa : </strong></label> 
            <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/>
            </div> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> ID : </strong></label> 
            <select>
                <option onChange={e => setID(e.target.value)}>1</option>
                <option onChange={e => setID(e.target.value)}>2</option>
                <option onChange={e => setID(e.target.value)}>3</option>
            </select>
          
              </div>
              <br></br>
               <button  class="butoni">Submit</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreateApart