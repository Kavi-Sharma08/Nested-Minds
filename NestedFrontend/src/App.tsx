import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/Homepage';
import About from './components/About';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Contact from './components/Contact';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/studentDashboard' element = {<StudentDashboard/>}></Route>
        <Route path='/teacherDashboard' element = {<TeacherDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
