import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function UpdateStudent() {
    const [students, setStudent] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const {id} = useParams();
    const navigate = useNavigate();
    const [uname , setEmri] = useState(name)
    const [uemail , setEmeil] = useState(email)

    

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{ name, email}) 
        .then(res => { 
             console.log(res); 
             navigate('/students'); 
             }).catch(err => console.log(err));
             } 

             useEffect(()=> {
                axios.get('http://localhost:8081/students')
                .then(res => setStudent(res.data))
                 .catch(err => console.log(err)); 
                 },[])

             
             
             console.log(email);
             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Student</h2> 
                        <br></br>
                        <div class="all">  
                         <label htmlFor=""><strong>Emri :</strong></label>  
                           <input type="text"  value={name}  placeholder='Enter Name' class="inp"   
                                 onChange={e => setName(e.target.value)} /> 
                                  </div>  
                                  
                                   <div class="all"> 
                                   <label htmlFor=""><strong>Email :</strong></label> 
                                   <input type="email" placeholder='Enter Email'  value={email} class="inp"  onChange={e => setEmail(e.target.value)} />
                                   </div>                
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default UpdateStudent