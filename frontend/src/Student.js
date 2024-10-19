import React, { useEffect, useState } from 'react'

import axios from 'axios'

import {Link ,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import StudentUser from './StudentUser'
import StudentAdmin from './StudentAdmin'






function Student() {
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
    
  <div style={{alignItems:"center",justifyContent:"center", height: "100%"}}>
     
     {role=="admin" && <StudentAdmin/>}
      {role=="visitor" && <StudentUser/>}
  </div>
  
  )}
export default Student