import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import DpImage from "../assets/dp.jpg";


export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center  text-white p-2 mx-4">
        <div className="container mx-auto my-2">
          <button
            whileHover={{ x: -5 }}
            onClick={() => navigate('/')}
            className="inline-flex items-cente my-auto  font-medium"
          >
            <IoIosArrowBack className="mr-2 my-auto" />
            <div className="">
              <p className="text-start">Media Management </p>
              <p className="text-start text-shadow-amber-100 font-light">Draft Compaign</p>
            </div>
          </button>
        </div>
        <div>
          <div className="container mx-auto my-2">
            <div className='flex'>
                <div className='mr-2 hidden sm:block'>
                    <p className='text-right'>Muhammad Faisal</p>
                    <p className='text-blue-400 underline text-right font-light cursor-pointer'>Edit Profile</p>
                </div>
<div className='my-auto'>
            <img src={DpImage} alt="Zoho Logo" className="h-8 w-auto rounded-md" />

</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
