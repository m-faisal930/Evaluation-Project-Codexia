import React from 'react'

export default function NewsContent() {
  return (
    <div>
      <p>What type of "News" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="News1">News 1</option>
        <option value="News2">News 2</option>
        <option value="News3">News 3</option>
      </select>
    </div>
  );
}
