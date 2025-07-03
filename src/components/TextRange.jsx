import React from 'react'

export default function TextRange() {

  return (
    <div className="md:w-150 w-full mt-4">
      <p className="inline-block mr-2 font-light">100</p>
      <input
        type="range"
        id="textRange"
        min="100"
        max="1000"
        className=" h-1 bg-gray-800 rounded-md  cursor-pointer"
      />
      <p className="inline-block ml-2 font-light">1000</p>

    </div>
  );
}
