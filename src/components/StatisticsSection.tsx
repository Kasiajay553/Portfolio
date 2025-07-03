import React, { useEffect, useState } from 'react';
import CountUp from './CountUp';

interface StatItemProps {
  number: string;
  description: React.ReactNode;
}

const StatisticsSection: React.FC = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-12">
          <StatItem 
            number="20+" 
            description={
              <div className="text-left">
                <p>end-user platforms supported</p>
                <p>for running Unity creations<sup>2</sup></p>
              </div>
            } 
          />
          
          <StatItem 
            number="3.6B" 
            description={
              <div className="text-left">
                <p>downloads per month of</p>
                <p>Made with Unity applications<sup>3</sup></p>
              </div>
            } 
          />
          
          <StatItem 
            number="82" 
            description={
              <div className="text-left">
                <p>of the top 100 games use</p>
                <p>Unity to grow their games<sup>4</sup></p>
              </div>
            } 
          />
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<StatItemProps> = ({ number, description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-5xl md:text-6xl font-bold mb-3">
        <CountUp end={number} />
      </div>
      <div className="text-gray-300 text-sm md:text-base">
        {description}
      </div>
    </div>
  );
};

export default StatisticsSection;