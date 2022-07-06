import React from "react";
import guccho from "../Assets/adm_hsc22_varsity.jpg"
import medical from "../Assets/adm_hsc22_med.jpg"
import medicalQue from "../Assets/medical_question_solve.jpg"
import AdmissoinExamCard from "../Components/AdmissionExam/AdmissoinExamCard";
const AdmissionExam = () => {
  return (
    <div className="lg:px-24 md:px-10 px-5 py-32">
      <h1 className="text-2xl">প্রোগ্রাম সমূহ</h1>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-5">
        <AdmissoinExamCard cover={guccho} title="ভার্সিটি + গুচ্ছ এডমিশন কোর্স - ২০২২" />
        <AdmissoinExamCard cover={medical} title="মেডিকেল এডমিশন কোর্স - ২০২২" />
        <AdmissoinExamCard cover={medicalQue} title="Medical Admission Question..." />
      </div>
    </div>
  );
};

export default AdmissionExam;
