import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function LiftiUpdate() {
    const [ndertesa, setNdertesa] = useState([])

    const [emertimi, setEmertimi] = useState('')
    const [NdertesaID, setNdertesaID] = useState('')
    const [ndertesaOptions, setNdertesaOptions] = useState([]);
    const {ID} = useParams('')
    const navigate = useNavigate();
    const [uemri , setEmr] = useState(emertimi)
    const [under , setNDr] = useState(NdertesaID)

    
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
        axios.put('http://localhost:8081/ndertesa/update/'+ID,{emertimi,NdertesaID}) 
        .then(res => { 
             console.log(res); 
             navigate('/lifti'); 
             }).catch(err => console.log(err));
             } 

             useEffect(()=> {
                axios.get('http://localhost:8081/lifti')
                .then(res => setEmertimi(res.data))
                 .catch(err => console.log(err)); 
                 },[])

             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Lifti</h2> 
                        <br></br>
                        <div class="all">  
                         <label htmlFor=""><strong>Emri i liftit :</strong></label>  
                           <input type="text"    placeholder='Enter Name' class="inp"   
                                 onChange={e => setEmertimi(e.target.value)} /> 
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


                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default LiftiUpdate