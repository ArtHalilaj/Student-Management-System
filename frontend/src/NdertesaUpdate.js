import axios from 'axios';

import React, { useState,useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


function NdertesaUpdate() {
    const [ndertesa, setNdertesa] = useState([])

    const [emri58730, setEmri] = useState('')
    const [emri5873, setEmrii] = useState('')
    const [DataPT, setDataPT] = useState('')
    const {id58730} = useParams('')
    const navigate = useNavigate();
    const [uemri , setEmr] = useState(emri58730)

    useEffect(() => {
        axios
          .get('http://localhost:8081/ndertesa/' + id58730)
          .then((res) => {
            // Extract the 'emri58730' property from the response data
            setEmrii(res.data.emri58730);
          })
          .catch((err) => console.log(err));
      }, [id58730]);

      

    

    function handleSubmit(event) {
        const DataPT = new Date();
        const formattedDateTime = DataPT.toLocaleString(); 
        event.preventDefault();
        axios.put('http://localhost:8081/ndertesa/update/'+id58730,{emri58730,DataPT}) 
        .then(res => { 
             console.log(res); 
             navigate('/ndertesa'); 
             }).catch(err => console.log(err));
             } 

             useEffect(()=> {
                axios.get('http://localhost:8081/ndertesa')
                .then(res => setEmri(res.data))
                 .catch(err => console.log(err)); 
                 },[])

             return ( 
                 <div class="first"> 
                  <div  class="second">
                     <form  onSubmit={handleSubmit}>
                        <h2>Update Ndertesa</h2> 
                        <br></br>
                        <div class="all">  
                         <label htmlFor=""><strong>Emri i nderteses :</strong></label>  
                           <input type="text" value={emri5873}     placeholder='Enter Name' class="inp"   
                                 onChange={e => setEmri(e.target.value)} /> 
                                  </div>   

                                    <div>
            <label htmlFor="">
              <strong> Data dhe ora aktuale: </strong>
            </label>
            <input
              type="text"
              value={DataPT}
              
            />
          </div>             
                                   <button style={{width:"100%",height:"40px",backgroundColor:"#24a0ed",color:"white",fontWeight:"bold",border:"1px solid #24a0ed "}} class="butoni" className='btn btn-success'>Update</button> 
                                   </form> 
                                    </div>
                                    </div>  
                                    )}

export default NdertesaUpdate