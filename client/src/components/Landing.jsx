import React from 'react';

const Landing = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-8 mt-[0px] min-h-screen bg-red-700"
      style={{
        backgroundImage: `url('https://www.opencampus.xyz/static/media/opening-illustration.5bb9ba880a1179f4ab2a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center gap-x-12">
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border border-blue-700  transition duration-300'>
          <a href='/organisation-listing'>Join as Institute</a>  
        </div>
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border border-blue-700  transition duration-300'>
          Join as Student
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className='bg-red-700 text-white p-6 rounded-lg shadow-lg border-2 border-white transition duration-300'>
          <h1 className="font-bold text-xl">Box 1 Title</h1>
          <p className="mt-2">This is the description for Box 1.</p>
        </div>
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border-2 border-red-700 transition duration-300'>
          <h1 className="font-bold text-xl">Box 2 Title</h1>
          <p className="mt-2">This is the description for Box 2.</p>
        </div>
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border-2 border-red-700 transition duration-300'>
          <h1 className="font-bold text-xl">Box 3 Title</h1>
          <p className="mt-2">This is the description for Box 3.</p>
        </div>
        <div className='bg-red-700 text-white p-6 rounded-lg shadow-lg border-2 border-white transition duration-300'>
          <h1 className="font-bold text-xl">Box 4 Title</h1>
          <p className="mt-2">This is the description for Box 4.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;