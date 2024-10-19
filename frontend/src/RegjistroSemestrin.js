  // import axios from 'axios';
  // import React, { useState,useEffect } from 'react';
  // import { Link,useNavigate } from 'react-router-dom';
  // import './App.css';

  // function RegjistroSemestrin() {
  //   const [qyteti, setQyteti] = useState("");
  //   const [semestri, setSemestri] = useState("");
  //   const [selectedOption, setSelectedOption] = useState("");

  //   const[role,setRole]=useState('')
  //   const navigate=useNavigate()

  //   axios.defaults.withCredentials=true;
  //   useEffect(()=>{
  //       axios.get('http://localhost:8081')
  //       .then(res=>{
  //           if(res.data.valid){
  //               setRole(res.data.role);
  //           } else{
  //               navigate('/login')
  //           }
  //       })
  //       .catch(err => console.log(err))
  //   },[])

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = { Qyteti: qyteti, semestri: semestri, selectedOption: selectedOption };
  //     fetch("/App", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //   };

  //   return (
  //     <div>    <div  className="ed">
  //       <form style={{backgroundColor:"white"}} onSubmit={handleSubmit} className="registration-form">
  //         <h2>Regjistro Semestrin</h2>
  //         <select value={qyteti} onChange={(event) => setQyteti(event.target.value)}>
  //           <option value="">Zgjedh Qytetin</option>
  //           <option value="UNI-Prishtine">UNI-Prishtinë</option>
  //           <option value="UNI-Prizren">UNI-Prizren</option>
  //           <option value="Uni-Peje">UNI-Mitrovicë</option>
  //         </select>

  //         <select value={semestri} onChange={(event) => setSemestri(event.target.value)}>
  //           <option value="">Zgjedh Semestrin</option>
  //           <option value="Semestri 1">Semestri 1</option>
  //           <option value="Semestri 2">Semestri 2</option>
  //           <option value="Semestri 3">Semestri 3</option>
  //           <option value="Semestri 4">Semestri 4</option>
  //           <option value="Semestri 5">Semestri 5</option>
  //           <option value="Semestri 6">Semestri 6</option>
  //         </select>

  //         <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
  //           <option value="">Zgjedh Orarin</option>
  //           <option value="Paradite">Paradite</option>
  //           <option value="Mbasdite">Pasdite</option>
  //         </select>

  //         <button type="submit">Regjistro</button>
  //       </form>
  //     </div>
  //     </div>

  //   );
  // }

  // export default RegjistroSemestrin;




  import axios from 'axios';

  import React, { useEffect, useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'


  function RegjistroSemestrin() {
    const [regjistrosemestrin, setRegjistroSemestrin] = useState([])

    const [idStudent, setIdStudent] = useState('') 
      const [lokacioni, setLokacioni] = useState('') 
      const [semestri, setSemestri] = useState('') 
      const [orari, setOrari] = useState('') 
      const navigate = useNavigate();

     
    
          const[role,setRole]=useState('')
       
      function handleSubmit(event) {
          event.preventDefault(); 
            axios.post('http://localhost:8081/createSemestri',{lokacioni,semestri,orari,idStudent})
            .then(res => {
              console.log(res);
              navigate('/regjistrosemestrin'); 
          }).catch(err => console.log(err));

        }
     
          
      
          axios.defaults.withCredentials=true;
          useEffect(()=>{
              axios.get('http://localhost:8081')
              .then(res=>{
                  if(res.data.valid){
                      setRole(res.data.role);
                  } else{
                      navigate('/login')
                  }
              })
              .catch(err => console.log(err))
          },[])
      
          useEffect(()=> {
              axios.get('http://localhost:8081/regjistrosemestrin')
              .then(res => setRegjistroSemestrin(res.data))
               .catch(err => console.log(err)); 
               },[])
      
          const handleDelete = async (id) => { 
              try { 
               await axios.delete('http://localhost:8081/regjistrosemestrin/'+id)
               window.location.reload() 
              }catch(err) {  
               console.log(err);   
              }   
           
      }  

    

      return (
      <div class='first' style={{color:"white"}}>
          <div class='second' style={{backgroundColor:"#234465",border:"2px solid #234465"}}> 
          <form onSubmit={handleSubmit}>
              <h2>Regjistro   Semestrin :</h2> 
              <br></br>
            
              <div className='mb-2'> 
              <label htmlFor=""><strong> ID e juaja : </strong></label> 
              <br></br>
              <br></br>
              <input type="idStudent" placeholder='Enter your ID' class="inp"
              onChange={e => setIdStudent(e.target.value)}/> 
                </div>
                <br></br>
              <div className='mb-2'> 
              <label htmlFor=""> <strong> Lokacioni : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={lokacioni} name='lenda' onChange={e => setLokacioni(e.target.value)}>
              <option >Zgjedh Lokacionin</option>
                <option value="Prishtine">Prishtine</option>
              <option value="Ferizaj">Ferizaj</option>
              <option value="Gjilan">Gjilan</option>
              <option value="Peje">Peje</option>
              <option value="Prizren">Prizren</option>
              
  </select>
            
                </div>
                <div className='mb-2'> 
              <label htmlFor=""> <strong> Semestri : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={semestri} name='lenda' onChange={e => setSemestri(e.target.value)}>
              <option >Zgjedh Semestrin</option>
                <option value="Semestri 1">Semestri 1</option>
              <option value="Semestri 2">Semestri 2</option>
              <option value="Semestri 3">Semestri 3</option>
              <option value="Semestri 4">Semestri 4</option>
              <option value="Semestri 5">Semestri 5</option>
              <option value="Semestri 6">Semestri 6</option>
              
  </select>
            
                </div>
              
                <div className='mb-2'> 
              <label htmlFor=""> <strong> Orari : </strong></label> 
              {/* <input type="text" placeholder='Enter Name' class="inp" onChange={e => setName(e.target.value)}/> */}
              <select value={orari} name='lenda' onChange={e => setOrari(e.target.value)}>
              <option >Zgjedh Orarin</option>
                <option value="Paradite">Paradite</option>
              <option value="Pasdite">Pasdite</option>
            
              
  </select>
            
                </div>
                <br></br>
                <button  onClick={() => {
    window.location.reload();
  }}  class="butoni">Regjistro Semestrin</button>
                </form> 
                </div> 


                <div style={{width:"40%",backgroundColor:"#234465",border:"2px solid #234465"}} class='second'>
        {/* <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/create" class='butoni'>Shto Studentin +</Link> */}
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Lokacioni</th>   
                     <th>Semestri</th>   
                       <th>Orari</th>    
                       <th>Action</th>   
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              regjistrosemestrin.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.lokacioni}</td>
                                   <td>{data.semestri}</td> 
                                   <td>{data.orari}</td> 
                                   <td> 

                                   <button style={{width:"100%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.id)}>Çregjistro</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>



                </div>  


            
                                      
                                      


                )}

                
  export default RegjistroSemestrin