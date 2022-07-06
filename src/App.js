import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from "./Components/HomePage/Footer/Footer";
import ProgramList from "./Components/HomePage/ProgramList/ProgramList";
import JobpreCourse from "./Components/JobPreCourse/JobpreCourse";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar/Navbar";
import BookStore from "./Pages/BookStore";
import AdmissionExam from "./Pages/AdmissionExam";
import CoursesPage from "./Pages/CoursesPage";
import AcademicPage from "./Pages/AcademicPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/cource" element={<CoursesPage />} />
        <Route path="/admission" element={<AdmissionExam />} />
        <Route path="/jobPre" element={<JobpreCourse />} />
        <Route path="/bookstore" element={<BookStore/>} />
        <Route path="/login" element={<Login />} />
      </Routes>

     
      <ProgramList />
      <Footer />
    </div>
  );
}

export default App;
