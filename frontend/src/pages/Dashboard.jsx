import React from 'react';
import Login from '../Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <BrowserRouter>
        <Sidebar>
          <Routes>
          <Route path='/dashboard' element={<Login />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    );
};

export default Dashboard;