import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { Link,useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Visitor from './Visitor'
import StudentUser from './StudentUser'






function Lifti() {
    const [lifti, setLifti] = useState([])

    const [ndertesaOptions, setNdertesaOptions] = useState([]);
    
    

    const navigate=useNavigate()

    axios.defaults.withCredentials=true;

    useEffect(() => {
        // Fetch the list of names and IDs from the 'ndertesa' table or the relevant table
        axios.get('http://localhost:8081/ndertesa').then((response) => {
          const ndertesaData = response.data;
          // Map the data to create an array of <option> elements
          const options = ndertesaData.map((ndertesa) => (
            <option key={ndertesa.id58730} value={ndertesa.id58730}>
              {ndertesa.emri58730}
            </option>
          ));
          // Set the options for the select element
          setNdertesaOptions(options);
        });
      }, []);

    useEffect(()=> {
        axios.get('http://localhost:8081/lifti')
        .then(res => setLifti(res.data))
         .catch(err => console.log(err)); 
         },[])

    const handleDelete = async (ID) => { 
        try { 
         await axios.delete('http://localhost:8081/lifti/'+ID)
         window.location.reload() 
        }catch(err) {  
         console.log(err);   
        }   
     }
  return (
    
  <div class='first'>
    <div style={{width:"40%",backgroundColor:"#042940"}} class='second'>
        <Link style={{width:"90%",backgroundColor:"#68bb59"}} to="/createLifti" class='butoni'>Krijo Liftin +</Link>
        <br>
        </br>
        <br></br>
        <table style={{padding:"10px",width:"100%"}} className='table'>
             <thead>
                 <tr style={{textAlign:"center",color:"white"}}>
                    <th>Emertimi:</th> 
                    <th></th> 
                    <th>NdertesaID:</th>    
                       <th>Action:</th>    
                         </tr>   
                          </thead>  
                          <tbody> 
                             { 
                              lifti.map((data, i)=> ( 
                                 <tr style={{textAlign:"center",color:"white"}} key={i}> 
                                  <td>{data.emertimi}</td>\
                                  <td>{data.NdertesaID}</td>
                                  
                                   <td> 

                                   <Link style={{width:"30%",backgroundColor:"#24a0ed",color:"white",border:"1px solid #24a0ed "}} to={`update/${data.ID}`} class='butoni'>Update </Link>&nbsp;


                                   <button style={{width:"40%",backgroundColor:"#ff5858",color:"white",fontWeight:"bold",border:"1px solid #ff5858",margin:"0"}} class="butoni2" onClick={ e => handleDelete(data.ID)}>Delete</button>
                                   </td>
                                    </tr> 
                              )) 
                                    } 
                                    </tbody>  
                                     </table> 
                                     </div>
                                     </div>  
                                     )}
export default Lifti