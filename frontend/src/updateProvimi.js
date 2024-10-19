import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';



function UpdateProvimi() {
    const [lenda, setLenda] = useState('')
    const [emriProfesorit, setEmriProfesorit] = useState('') 
    const {idProvimi} = useParams();
    const navigate = useNavigate();
    const [ulenda , setLend] = useState(lenda)
    const [uemriProfesorit , setProf] = useState(emriProfesorit)

    

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+idProvimi,{ lenda, emriProfesorit}) 
        .then(res => { 
             console.log(res); 
             navigate('/paraqitProvimin'); 
             }).catch(err => console.log(err));
             } 
             
             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Paraqitjen e Provimit</h2> 
                        <br></br>
                        <div class="all">  
                       
                         <label htmlFor=""><strong>Lenda :</strong></label>  
                           {/* <input type="text"   placeholder='Enter Name' class="inp"   
                                 onChange={e => setName(e.target.value)} />  */}
                 <select value={lenda} name='lenda' onChange={e => setLenda(e.target.value)}>
                        <option >Zgjedh Lenden</option>
                        <option value="Lab 1">Lab 1</option>
                        <option value="Algoritme">Algoritme</option>
                        <option value="Shkenca Kompjuterike 2">Shkenca Kompjuterike 2</option>
                        <option value="Inxhinieri Softuerike">Inxhinieri Softuerike</option>
                        <option value="Rrjeta Kompjuterike">Rrjeta Kompjuterike</option>
                 </select>
                                  </div>  
                                   <div class="all"> 
                                   <label htmlFor=""><strong>Email :</strong></label> 
                                   {/* <input type="email" placeholder='Enter Email' class="inp"   onChange={e => setEmail(e.target.value)}/> */}
                      <select value={emriProfesorit} name='emriProfesorit' onChange={e => setEmriProfesorit(e.target.value)}>
                            <option >Zgjedh Profesorin</option>
                            <option value="Lavdim Menxhiqi">Lavdim Menxhiqi</option>
                            <option value="Blerim Zylfiu">Blerim Zylfiu</option>
                            <option value="Edmond Jajaga">Edmond Jajaga</option>
                            <option value="Erzen Talla">Erzen Talla</option>
                            <option value="Besnik Qehaja">Besnik Qehaja</option>
                    </select>
                                   </div>                
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default UpdateProvimi