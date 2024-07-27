import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Auth from './pages/Auth.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
import UserHomePage from './pages/UserHomePage.jsx';
import DoctorSignup from './pages/doctorSignup.jsx';
import Login from './pages/Login.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import SearchDoctors from './pages/SearchDoctors.jsx';


function App (){
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path='/doctorDashboard' element={<DoctorDashboard/>} />
        <Route path="/home" element={<UserHomePage />} />
        <Route path='/signUpDoctor' element={<DoctorSignup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/searchDoctors' element = {<SearchDoctors/>}></Route>
      </Routes>
    </div>
  )
}

export default App
