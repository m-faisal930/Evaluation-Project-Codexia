import React from 'react';

export default function FunContent() {
  return (
    <div>
      <p>What type of "Fun" Content you want to Create?</p>
      <select
        className="md:w-100 w-full p-3 bg-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition scroll-auto"
        name=""
        value=""
      >
        <option value="fun1">Fun 1</option>
        <option value="fun2">Fun 2</option>
        <option value="fun3 ">Fun 3</option>
      </select>
    </div>
  );
}
