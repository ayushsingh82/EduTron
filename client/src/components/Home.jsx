import React from 'react'


import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "Welcome to our",
        className:" text-white"
      },
    
     
      {
        text: "Platform.",
        className: "text-black",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[30px]  ">
        <TypewriterEffectSmooth words={words}  className='text-4xl'/>
   
      </div>
    );
  }


const Home = () => {
  return (
    <div className='min-h-screen bg-red-700 flex flex-col justify-center items-center text-white text-center px-6'>
      <h1 className='text-4xl font-bold mb-6 mt-[50px]'>
       <TypewriterEffectSmoothDemo/>
      </h1>

      <p className='text-xl mb-8 max-w-2xl'>
        Our Platform helps organizations register and enables students to learn from institutes while earning rewards. Join us to be part of a decentralized future where learning and growth go hand in hand.
      </p>
      <div className='flex gap-x-6 mb-12'>
        <a href='/organisation-listing' className='bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg  border border-2 border-white  transition duration-300'>
          Join as Institute
        </a>
        <a href='/student-listing' className='bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg border border-2 border-white  transition duration-300'>
          Join as Student
        </a>
      </div>

      <img className='' src='https://www.opencampus.xyz/static/media/opening-illustration.5bb9ba880a1179f4ab2a.png' alt='img'/>

      <div className='grid grid-cols-4 gap-4 w-full max-w-4xl mt-[120px]'>
      <div className='bg-red-700 text-white font-medium p-8 rounded-lg shadow-lg h-52 flex flex-col justify-center border border-2 border-black'>
  <p className='text-sm'>EduTron provides a decentralized platform for organizations to list courses, attracting motivated learners & ensuring transparency using blockchain technology.</p>
</div>
<div className='bg-black text-white  font-medium p-8 rounded-lg shadow-lg h-52 flex flex-col justify-center border border-2 border-black'>
  <p className='text-sm'>The platform automates registration, course listing, and student enrollment using TRON smart contracts for seamless course certification and reward distribution.</p>
</div>
<div className='bg-red-700 text-white  border-blue-500 font-medium p-8 rounded-lg shadow-lg h-52 flex flex-col justify-center border border-2 border-black'>
  <p className='text-sm'>Milestones include beta testing with selected users, public launch, and continuous improvements based on user feedback to enhance the experience.</p>
</div>
<div className='bg-black text-white  font-medium p-8 rounded-lg shadow-lg h-52 flex flex-col justify-center border border-2 border-black'>
  <p className='text-sm'>Community building through partnerships with educational institutions, platform promotion in the TRON community, and user engagement to drive adoption.</p>
</div>

      </div>

      <div className='mt-[80px]'>
      <img  src='https://www.opencampus.xyz/static/media/about.a615f3609bdaa7ec77a4.png' alt='' />
      </div>
      </div>
  )
}

export default Home