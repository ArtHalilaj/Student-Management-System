import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'






function StudentUser() {
    const [students, setStudent] = useState([])
    
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
        axios.get('http://localhost:8081/students')
        .then(res => setStudent(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (id) => { 
        try { 
         await axios.delete('http://localhost:8081/students/'+id)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
  return (
  <div class='first'>
    <div style={{width:"40%",backgroundColor:"#234465"}} class='second'>
        <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/create" class='butoni'>Shto Studentin +</Link>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Emri</th>   
                     <th>Email</th>   
                       
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              students.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.Name}</td>
                                   <td>{data.Email}</td> 
                                   <td> 

                                  


                                 
                                   </td>
                                    </tr> 
                                    )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>
                                     </div>  
                                     )}
export default StudentUser