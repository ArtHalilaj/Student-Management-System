import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import ProvimiStudent from './ProvimiStudent'
import ProvimiAdmin from './ProvimiAdmin'






function ParaqitProvimin() {
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
    
        <div style={{alignItems:"center",justifyContent:"center", height: "100%"}}>
           
           {role=="admin" && <ProvimiAdmin/>}
            {role=="visitor" && <ProvimiStudent/>}
        </div>
        
        )}
export default ParaqitProvimin