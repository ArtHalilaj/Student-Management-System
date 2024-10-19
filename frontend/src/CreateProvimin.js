import axios from 'axios';

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function CreateProvimin() {
    const [lenda, setLenda] = useState('') 
    const [emriProfesorit, setEmriProfesorit] = useState('') 
    const [idStud, setIdStud] = useState('') 
    const navigate = useNavigate();
    function handleSubmit(event) {
         event.preventDefault(); 
          axios.post('http://localhost:8081/createProvimin',{lenda, emriProfesorit,idStud})
          .then(res => {
            console.log(res);
            navigate('/paraqitProvimin'); 
        }).catch(err => console.log(err));
     }  return (
     <div class='first'>
        <div class='second'> 
        <form onSubmit={handleSubmit}>
            <h2>Paraqit provimin :</h2> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> ID e juaja : </strong></label> 
            <input type="idStud" placeholder='Enter your ID' class="inp"
             onChange={e => setIdStud(e.target.value)}/> 
              </div>
              <br></br>
            <div className='mb-2'> 
            <label htmlFor=""> <strong> Lenda : </strong></label> 
            {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
            <select value={lenda} name='lenda' onChange={e => setLenda(e.target.value)}>
            <option >Zgjedh Lenden</option>
              <option value="Lab 1">Lab 1</option>
             <option value="Algoritme">Algoritme</option>
             <option value="Shkenca Kompjuterike 2">Shkenca Kompjuterike 2</option>
            <option value="Inxhinieri Softuerike">Inxhinieri Softuerike</option>
            <option value="Rrjeta Kompjuterike">Rrjeta Kompjuterike</option>
</select>
            </div> 
            <br></br>
            <div className='mb-2'> 
            <label htmlFor=""><strong> Profesori : </strong></label> 
            {/* <input type="email" placeholder='Enter Email' class="inp"
             onChange={e => setEmail(e.target.value)}/>  */}
              <select value={emriProfesorit} name='emriProfesorit' onChange={e => setEmriProfesorit(e.target.value)}>
              <option >Zgjedh Profesorin</option>
              <option value="Lavdim Menxhiqi">Lavdim Menxhiqi</option>
             <option value="Blerim Zylfiu">Blerim Zylfiu</option>
             <option value="Edmond Jajaga">Edmond Jajaga</option>
            <option value="Erzen Talla">Erzen Talla</option>
            <option value="Besnik Qehaja">Besnik Qehaja</option>
</select>
              </div>
              <br></br>
               <button  class="butoni">Paraqit Provimin</button>
               </form> 
               </div> 
               </div>  
               )}
export default CreateProvimin