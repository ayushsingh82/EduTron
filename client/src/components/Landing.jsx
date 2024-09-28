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
          <a href='student-listing'>Join as Student</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
      <div className='bg-red-700 text-white p-6 rounded-lg shadow-lg border-2 border-white transition duration-300 w-64'>
      <h1 className="font-bold text-xl">Platform Overview</h1>
      <p className="mt-2">EduTron empowers organizations to list courses, <br/>
       offering rewards for student participation.</p>
    </div>
    <div className='bg-black text-white p-6 rounded-lg shadow-lg border-2 border-red-700 transition duration-300 w-64'>
      <h1 className="font-bold text-xl">Smart Contracts</h1>
      <p className="mt-2">TRON smart contracts automate course enrollment, certification, and reward distribution.</p>
    </div>
    <div className='bg-black text-white p-6 rounded-lg shadow-lg border-2 border-red-700 transition duration-300 w-64'>
      <h1 className="font-bold text-xl">Beta Testing</h1>
      <p className="mt-2">EduTron is currently in beta testing, gathering feedback from selected organizations.</p>
    </div>
    <div className='bg-red-700 text-white p-6 rounded-lg shadow-lg border-2 border-white transition duration-300 w-64'>
      <h1 className="font-bold text-xl">Community Growth</h1>
      <p className="mt-2">Focus on building a strong EduTron community through partnerships and engagement.</p>
    </div>
    
      </div>
    </div>
  );
}

export default Landing;