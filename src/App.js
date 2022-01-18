import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import Navbar from './navbar';
import SearchDoctor from './searchdoctor';
import './style.scss';
import SiginRegister from './sigin/sigin_register';
import DoctorDetail from './pickdoctor/doctor-infor';
import Question from './question';
import UpdateInfo from './update-info/UpdateInfo';
import Footer from './footer/Footer';
import Share from './share';
import CreatePost from './createpost';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/pickdoctor" element={<DoctorDetail></DoctorDetail>}></Route>
        <Route path="/datkham" element={<SearchDoctor></SearchDoctor>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/trangchu" element={<HomePage></HomePage>}></Route>
        <Route path="/hoidap/*" element={<Question></Question>}></Route>
        <Route path="/capnhatthongtin" element={<UpdateInfo></UpdateInfo>}></Route>
        <Route path="/dangnhap" element={<SiginRegister />}></Route>
        <Route path="/camnang/" element={<Share></Share>}></Route>
        <Route path="/createpost/" element={<CreatePost></CreatePost>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
