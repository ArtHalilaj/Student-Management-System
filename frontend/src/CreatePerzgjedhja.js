import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreatePerzgjedhja() {
    const [grupi, setGrupi] = useState('') 
    const [grupiID, setIdStud] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createPerzgjedhja',{grupi,grupiID})
          .then(res => {
            console.log(res);
            navigate('/perzgjedhjagrupit'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Paraqit provimin :</h2> 
            <br></br>
          
            <div className='mb-2'> 
            <label htmlFor=""><strong> ID e juaja : </strong></label> 
            <br></br>
            <br></br>
            <input type="idPerzgjedhja" placeholder='Enter your ID' class="inp"
             onChange={e => setIdStud(e.target.value)}/> 
              </div>
              <br></br>
            <div className='mb-2'> 
            <label htmlFor=""> <strong> Grupi per Ligjerata/Ushtrime : </strong></label> 
            {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
            <select value={grupi} name='lenda' onChange={e => setGrupi(e.target.value)}>
            <option >Zgjedh Grupin</option>
              <option value="1A">1A</option>
             <option value="1B">1B</option>
             <option value="2A">2A</option>
            <option value="2B">2B</option>
            <option value="3A">3A</option>
            <option value="3B">3B</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
</select>
           
              </div>
              <br></br>
               <button  class="butoni">Paraqit Provimin</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreatePerzgjedhja