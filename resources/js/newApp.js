import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import Footer from './Components/Footer';
import Header from './Components/Navbar';
import Feed from './Pages/Home';
import PostDetail from './Pages/PostDetail'
import Course from './Pages/Course';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Quiz from './Pages/Quiz';
import CourseDetail from './Pages/Course/CourseDetail';
import Therapist from './Pages/Therapist';
import Dashboard from './Pages/Dashboard';
import Advise from './Pages/Advise';

function App() {
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('mode')))

  useEffect(() => {
    if(!localStorage.getItem('mode')){
      localStorage.setItem('mode', false)
    }
  }, [])
  
  return (
    <div className={`font-Roboto ${checked ? 'bg-brand-night' : 'bg-[#fff]'}`}>
      <BrowserRouter>
        <Header checked={checked} setChecked={setChecked}/>
        <Routes>
          <Route exact path='/' element={<Feed/>}/>
          <Route path="/news/:postId" element={<PostDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/courses" element={<Course/>}/>
          <Route path="/course/:id" element={<CourseDetail/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/members" element={<Therapist/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/advise" element={<Advise/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
