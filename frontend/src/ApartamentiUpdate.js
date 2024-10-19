import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function ApartamentiUpdate() {
    const [apartamenti, setApartamenti] = useState([])

    const [adresa58730, setAdresa] = useState('')
    const [ndertesaID, setNdertesaID] = useState('')
    const {id58730} = useParams('')
    const navigate = useNavigate();
    const [uadresa , setAd] = useState(adresa58730)
    const [undertesa , setNder] = useState(ndertesaID)

    

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/apartamenti/update/'+id58730,{adresa58730,ndertesaID}) 
        .then(res => { 
             console.log(res); 
             navigate('/apartamenti'); 
             }).catch(err => console.log(err));
             } 

             useEffect(()=> {
                axios.get('http://localhost:8081/apartamenti')
                .then(res => setApartamenti(res.data))
                 .catch(err => console.log(err)); 
                 },[])

             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Apartamenti</h2> 
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
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default ApartamentiUpdate