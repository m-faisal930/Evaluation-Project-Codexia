import React from 'react'

export default function EducationContent() {
  return (
    <div>
      <p>What type of "Education" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="ed1">Education 1</option>
        <option value="ed2">Education 2</option>
        <option value="ed3">Education 3</option>
      </select>
    </div>
  );
}
