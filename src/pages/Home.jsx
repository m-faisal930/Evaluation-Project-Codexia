import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ContentSelection from "../components/ContentSelection.jsx"
import SelectionTabs from "../components/SelectionTabs.jsx"
export default function Home() {
  return (
    <div>
      <div className="bg-black min-h-screen font-sans">
        <Navbar />

        <hr className="border-gray-600 my-2 mx-4" />
        <ContentSelection />
        <hr className="border-gray-800 my-4 mx-4" />
        <SelectionTabs />
        <hr className="border-gray-800 my-2 mx-4" />

        <div className="flex flex-wrap justify-between p-12 ">
          <div className="mx-auto">
            <button className="bg-transparent border rounded-4xl border-gray-200 text-white py-3 px-20 font-bold mx-auto cursor-pointer hover:text-blue-300 hover:bg-white mb-1">
              Back
            </button>
          </div>
          <div className="mx-auto">
            <button className="bg-white border rounded-4xl border-gray-200 text-blue-300 py-3 px-20 font-bold mx-auto cursor-pointer hover:text-white hover:bg-transparent">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
