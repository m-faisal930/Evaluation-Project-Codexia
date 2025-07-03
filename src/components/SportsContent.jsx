import React from 'react'

export default function SportsContent() {
  return (
    <div>
      <p>What type of "sports" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="sports1">Sports 1</option>
        <option value="sports2">Sports 2</option>
        <option value="sports3">Sports 3</option>
      </select>
    </div>
  );
}
