import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function ApartamentiKrijo() {
    const [adresa58730, setAdresa] = useState('')
    const [ndertesaID, setNdertesaID] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createApartamenti',{adresa58730,ndertesaID})
          .then(res => {
            console.log(res);
            navigate('/apartamenti'); 
        }).catch(err => console.log(err));
     }  
     return (

     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Shto nje Apartamenti</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Adresa e apartamentit : </strong></label> 
            <input type="adresa58730" placeholder='Shkruani adresen e apartamentit ' class="inp"
             onChange={e => setAdresa(e.target.value)}/> 
              </div>

              <div className='mb-2'> 
            <label htmlFor=""> <strong> Numri i nderteses : </strong></label> 
            <select value={ndertesaID} name='ndertesaID' onChange={e => setNdertesaID(e.target.value)}>
            <option >Zgjedh Ndertesen</option>
              <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
</select>
           
              </div>

              <br></br>
               <button  class="butoni">Submit</button>
               </form> 
               </div> 
               </div>  
               )}


export default ApartamentiKrijo