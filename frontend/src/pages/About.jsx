import React from 'react';
import Profili from '../Profili';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Visitor from '../Visitor';

const About = () => {
    return (

      
        <BrowserRouter>
        <Sidebar>
          <Routes>
          <Route path='/about/get/Regjistro/:email' element={<Visitor />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    );
};

export default About;