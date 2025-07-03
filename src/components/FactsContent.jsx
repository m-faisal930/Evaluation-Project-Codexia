import React from 'react'

export default function FactsContent() {
  return (
    <div>
      <p>What type of "Facts" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="fact1">Fact 1</option>
        <option value="act2">Fact 2</option>
        <option value="fact3">Fact 3</option>
      </select>
    </div>
  );
}
