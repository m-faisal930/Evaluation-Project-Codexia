import React from 'react'

export default function TabButton({text}) {
  return (
    <div>
      <button className="flex items-center border rounded-xl  py-1 px-5 cursor-pointer">
        {text}
      </button>
    </div>
  );
}
