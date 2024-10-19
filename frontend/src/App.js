import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import Signup from './Signup'
import Login from './Login'
import ProfiliIm from './ProfiliIm';
import Student from './Student';
import UpdateStudent from './UpdateStudent';
import CreateStudent from './CreateStudent';
import RegjistroSemestrin from './RegjistroSemestrin';
import About from './pages/About';
import Profili from './Profili';
import Logout from './logout';
import Visitor from './Visitor';
import Admin from './Admin';
import Perzgjedhjagrupit from './Perzgjedhjagrupit';
import DetyraNeKlas from './DetyraNeKlas';
import CreateApart from './CreateApart';
import ParaqitProvimin from './ParaqitProvimet';
import CreateProvimin from './CreateProvimin';
import UpdateProvimi from './updateProvimi';
import Profile from './Profile';
import CreatePerzgjedhja from './CreatePerzgjedhja';
import UpdatePerzgjedhja from './updatePerzgjedhja';
import Ndertesa from './Ndertesa';
import NdertesaKrijo from './NdertesaKrijo';
import NdertesaUpdate from './NdertesaUpdate';
import Apartamenti from './Apartamenti'
import ApartamentiKrijo from './ApartamentiKrijo';
import ApartamentiUpdate from './ApartamentiUpdate';
import Lifti from './Lifti'
import LiftiCreate from './LiftiCreate'
import LiftiUpdate from './LiftiUpdate';







const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path='/create' element={<CreateStudent />}></Route>
        <Route path='/createProvimin' element={<CreateProvimin />}></Route>
        <Route path='/createApart' element={<CreateApart />}></Route>
        <Route path='/students/update/:id' element={<UpdateStudent />}></Route> 
        <Route path='/perzgjedhjagrupit/update/:idG' element={<UpdatePerzgjedhja />}></Route> 
        <Route path='/paraqitProvimin/update/:id' element={<UpdateProvimi />}></Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/about/get/Regjistro/:email" element={<Visitor />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />\
          <Route path="/detyraNeKlas" element={<DetyraNeKlas />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/perzgjedhjagrupit" element={<Perzgjedhjagrupit />} />
          <Route path="/analytics" element={<RegjistroSemestrin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createPerzgjedhja" element={<CreatePerzgjedhja />} />
          <Route path="/regjistrosemestrin" element={<RegjistroSemestrin />} />
          <Route path="/createSemestri" element={<RegjistroSemestrin />} />

          <Route path="/ndertesa" element={<Ndertesa />} />
          <Route path="/createNdertesa" element={<NdertesaKrijo />} />
          <Route path="/ndertesa/update/:id58730" element={<NdertesaUpdate />} />

          <Route path="/apartamenti" element={<Apartamenti />} />
          <Route path="/createApartamenti" element={<ApartamentiKrijo />} />
          <Route path="/apartamenti/update/:id58730" element={<ApartamentiUpdate />} />

          <Route path="/lifti" element={<Lifti />} />
          <Route path="/createLifti" element={<LiftiCreate />} />
          <Route path="/lifti/update/:ID" element={<LiftiUpdate />} />


          

          <Route path="/paraqitProvimin" element={<ParaqitProvimin />} />
          <Route path="/students" element={<Student />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


