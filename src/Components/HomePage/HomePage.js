import React from 'react';
import Accivment from './AcchiveMent/Accivment';
import AdmissionExam from './AdmissionExam/AdmissionExam';
import ClassOneToTwelve from './Class1-12/ClassOneToTwelve';
import CrushCource from './CrushCource/CrushCource';
import HeroBottom from './HeroBottom/HeroBottom';
import JobPresparestion from './JobPreparation/JobPresparestion';
import Navbar from './Navbar/Navbar';
import ProgramJoin from './ProgramJoin/ProgramJoin';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroBottom />
            <CrushCource />
            <ClassOneToTwelve />
            <AdmissionExam />
            <JobPresparestion />
            <Accivment />
            <ProgramJoin />
            
        </div>
    );
};

export default HomePage;