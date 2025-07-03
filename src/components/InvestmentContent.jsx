import React from 'react'

export default function InvestmentContent() {
  return (
    <div>
      <p>What type of "Investment" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="investment1">Investment 1</option>
        <option value="Investment2">Investment 2</option>
        <option value="Investment3">Investment 3</option>
      </select>
    </div>
  );
}
