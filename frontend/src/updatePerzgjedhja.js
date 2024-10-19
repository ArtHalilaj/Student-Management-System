import axios from 'axios';

import React, { useState ,useEffect} from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function UpdatePerzgjedhja() {
    const [perzgjedhjagrupit, setPerzgjedhjagrupit] = useState([])

    const [grupi, setGrupi] = useState('')
    const {idG} = useParams();
    const navigate = useNavigate();
    const [ugrupi , setGr] = useState(grupi)

    
    

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/perzgjedhjagrupit/update/'+idG,{grupi}) 
        .then(res => { 
             console.log(res); 
             navigate('/perzgjedhjagrupit'); 
             }).catch(err => console.log(err));
             } 


             useEffect(()=> {
                axios.get('http://localhost:8081/perzgjedhjagrupit')
                .then(res => setPerzgjedhjagrupit(res.data))
                 .catch(err => console.log(err)); 
                 },[])
             
             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Perzgjedhjen e Grupit</h2> 
                        <br></br>
                        <div class="all">  
                         <label htmlFor=""><strong>Grupi :</strong></label>       
            <select value={grupi} name='grupi' onChange={e => setGrupi(e.target.value)}>
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
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default UpdatePerzgjedhja