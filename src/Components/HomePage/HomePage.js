import React from 'react';
import Accivment from './AcchiveMent/Accivment';
import HeroBottom from './HeroBottom/HeroBottom';
import JobPresparestion from './JobPreparation/JobPresparestion';
import Navbar from './Navbar/Navbar';
import ProgramJoin from './ProgramJoin/ProgramJoin';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroBottom />
            <JobPresparestion />
            <Accivment />
            <ProgramJoin />
            
        </div>
    );
};

export default HomePage;