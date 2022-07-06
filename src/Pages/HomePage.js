import React from 'react';
import Accivment from '../Components/HomePage/AcchiveMent/Accivment';
import AdmissionExam from '../Components/HomePage/AdmissionExam/AdmissionExam';
import ClassOneToTwelve from '../Components/HomePage/Class1-12/ClassOneToTwelve';
import CrushCource from '../Components/HomePage/CrushCource/CrushCource';
import Download from '../Components/HomePage/Download/Download';
import HeroArea from '../Components/HomePage/HeroArea/HeroArea';
import HeroBottom from '../Components/HomePage/HeroBottom/HeroBottom';
import JobPresparestion from '../Components/HomePage/JobPreparation/JobPresparestion';
import ProgramJoin from '../Components/HomePage/ProgramJoin/ProgramJoin';
const HomePage = () => {
    return (
        <div>
            <HeroArea />
            <HeroBottom />
            <CrushCource />
            <ClassOneToTwelve />
            <AdmissionExam />
            <JobPresparestion />
            <Accivment />
            <Download />
            <ProgramJoin />
            
        </div>
    );
};

export default HomePage;