import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import StudentUser from './StudentUser'






function ProvimiStudent() {
    const [paraqitProvimin, setParaqitProvimin] = useState([])
    
    const[role,setRole]=useState('')
    const navigate=useNavigate()

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
        axios.get('http://localhost:8081/paraqitProvimin')
        .then(res => setParaqitProvimin(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (idProvimi) => { 
        try { 
         await axios.delete('http://localhost:8081/paraqitProvimin/'+idProvimi)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
  return (
    
  <div class='first'>
    <div style={{width:"40%",backgroundColor:"#234465"}} class='second'>
        <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/createProvimin" class='butoni'>Paraqit Provimin +</Link>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Lenda</th>   
                     <th>Profesori</th>   
                       <th>Action</th>    
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              paraqitProvimin.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.lenda}</td>
                                   <td>{data.emriProfesorit}</td> 
                                   <td> 

                                  


                                   <button style={{width:"100%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.idProvimi)}>Anulo Provimin</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>
                                     </div>  
                                     )}
export default ProvimiStudent