import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaRegFileAlt, FaImage, FaVideo } from 'react-icons/fa';
import FunContent from "../components/FunContent.jsx"
import SportsContent from './SportsContent.jsx';
import EducationContent from './EducationContent.jsx';
import NewsContent from './NewsContent.jsx';
import InvestmentContent from './InvestmentContent.jsx';
import FactsContent from './FactsContent.jsx';
import TextRange from './TextRange.jsx';

export default function SelectionTabs() {
    const [selectedTab, setSelectedTab] = useState('Fun');
    
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    
    return (
      <div className=" text-white py-4 px-12">
        <div className="flex justify-between items-center mb-4"></div>
        <div className="flex space-x-4 mb-4 flex-wrap gap-0.5 ">
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'Fun'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('Fun')}
          >
            Fun
          </button>
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'Education'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('Education')}
          >
            Education
          </button>
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'Sports'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('Sports')}
          >
            Sports
          </button>
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'News'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('News')}
          >
            News
          </button>
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'Investment'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('Investment')}
          >
            Investment
          </button>
          <button
            className={`flex items-center border rounded-xl  py-1 px-5 cursor-pointer ${
              selectedTab === 'Facts'
                ? 'bg-blue-800 border-blue-800'
                : 'text-white border-white'
            }`}
            onClick={() => handleTabClick('Facts')}
          >
            Facts
          </button>
        </div>
        <div className="py-4  rounded ">
          {selectedTab === 'Fun' && <FunContent />}
          {selectedTab === 'Sports' && <SportsContent />}
          {selectedTab === 'Education' && <EducationContent />}
          {selectedTab === 'News' && <NewsContent />}
          {selectedTab === 'Investment' && <InvestmentContent />}
          {selectedTab === 'Facts' && <FactsContent />}
        </div>
        <TextRange />
      </div>
    );
    }
