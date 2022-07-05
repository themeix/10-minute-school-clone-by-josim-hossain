import React from 'react';
import Accivment from './AcchiveMent/Accivment';
import AdmissionExam from './AdmissionExam/AdmissionExam';
import ClassOneToTwelve from './Class1-12/ClassOneToTwelve';
import CrushCource from './CrushCource/CrushCource';
import Download from './Download/Download';
import HeroArea from './HeroArea/HeroArea';
import HeroBottom from './HeroBottom/HeroBottom';
import JobPresparestion from './JobPreparation/JobPresparestion';
import ProgramJoin from './ProgramJoin/ProgramJoin';
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