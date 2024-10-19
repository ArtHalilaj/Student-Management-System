import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';


function LiftiCreate() {
    const [emertimi, setEmertimi] = useState('')
    const [NdertesaID, setNdertesaID] = useState('')
    const [ndertesaOptions, setNdertesaOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of names and IDs from the 'ndertesa' table or the relevant table
        axios.get('http://localhost:8081/ndertesa').then((response) => {
          const ndertesaData = response.data;
          // Map the data to create an array of <option> elements
          const options = ndertesaData.map((ndertesa) => (
            <option key={ndertesa.id58730} value={ndertesa.id58730}>
              {ndertesa.emri58730}
            </option>
          ));
          // Set the options for the select element
          setNdertesaOptions(options);
        });
      }, []);

    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createLifti',{emertimi,NdertesaID})
          .then(res => {
            console.log(res);
            navigate('/lifti'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Shto nje Lift</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Emri i Liftit : </strong></label> 
            <input type="emertimi" placeholder='Shkruani emrin e liftit ' class="inp"
             onChange={e => setEmertimi(e.target.value)}/> 
              </div>

              <div className='mb-2'>
            <label htmlFor="">
              <strong> Numri i nderteses : </strong>
            </label>
            <select
              value={NdertesaID}
              name='NdertesaID'
              onChange={(e) => setNdertesaID(e.target.value)}
            >
              <option value="">Zgjedh Ndertesen</option>
              {ndertesaOptions}
            </select>
          </div>

              <br></br>
               <button  class="butoni">Submit</button>
               </form> 
               </div> 
               </div>  
               )}
export default LiftiCreate