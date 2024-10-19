import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function NdertesaKrijo() {
    const [emri58730, setEmri] = useState('')
    const [DataPT, setDataPT] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event) {

        const DataPT = new Date();
        const formattedDateTime = DataPT.toLocaleString(); 

         event.preventDefault(); 
          axios.post('http://localhost:8081/createNdertesa',{emri58730,DataPT})
          .then(res => {
            console.log(res);
            navigate('/Ndertesa'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Shto nje Ndertes</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Emri i nderteses : </strong></label> 
            <input type="emri58730" placeholder='Shkruani emrin e Nderteses ' class="inp"
             onChange={e => setEmri(e.target.value)}/> 
              </div>

              <div>
            <label htmlFor="">
              <strong> Data dhe ora aktuale: </strong>
            </label>
            <input
              type="text"
              value={DataPT}
              
            />
          </div>
              <br></br>
               <button  class="butoni">Submit</button>
               </form> 
               </div> 
               </div>  
               )}
export default NdertesaKrijo