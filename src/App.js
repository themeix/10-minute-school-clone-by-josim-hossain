import React from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from "./Components/HomePage/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ProgramList from "./Components/HomePage/ProgramList/ProgramList";
import JobpreCourse from "./Components/JobPreCourse/JobpreCourse";
import Login from "./Components/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobPre" element={<JobpreCourse />} />
        <Route path="/login" element={<Login />} />
      </Routes>

     
      <ProgramList />
      <Footer />
    </div>
  );
}

export default App;
