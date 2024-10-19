import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import StudentUser from './StudentUser'






function Apartamenti() {
    const [apartamenti, setApartamenti] = useState([])
    

    const navigate=useNavigate()

    axios.defaults.withCredentials=true;

    useEffect(()=> {
        axios.get('http://localhost:8081/apartamenti')
        .then(res => setApartamenti(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (id58730) => { 
        try { 
         await axios.delete('http://localhost:8081/apartamenti/'+id58730)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
  return (
    
  <div class='first'>
    <div style={{width:"40%",backgroundColor:"#042940"}} class='second'>
        <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/createApartamenti" class='butoni'>Krijo Apartamentin +</Link>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Adresa:</th> 
                    <th>Ndertesa:</th>   
                       <th>Action:</th>    
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              apartamenti.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.adresa58730}</td>
                                  <td>{data.ndertesaID}</td>
                                   <td> 

                                   <Link style={{width:"30%",backgroundColor:"#24a0ed",color:"white",border:"1px solid #24a0ed "}} to={`update/${data.id58730}`} class='butoni'>Update </Link>&nbsp;


                                   <button style={{width:"40%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.id58730)}>Delete</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>
                                     </div>  
                                     )}
export default Apartamenti