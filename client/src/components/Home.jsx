import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-red-800 flex flex-col justify-center items-center text-white text-center px-6'>
      <h1 className='text-4xl font-bold mb-6 mt-[50px]'>
        Welcome to Our DAO
      </h1>

      <p className='text-xl mb-8 max-w-2xl'>
        Our DAO helps organizations register and enables students to learn from institutes while earning rewards. Join us to be part of a decentralized future where learning and growth go hand in hand.
      </p>
      <div className='flex gap-x-6 mb-12'>
        <a href='/organisation-listing' className='bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg  border border-2 border-white  transition duration-300'>
          Join as Institute
        </a>
        <a href='#' className='bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg border border-2 border-white  transition duration-300'>
          Join as Student
        </a>
      </div>

      <img className='' src='https://www.opencampus.xyz/static/media/opening-illustration.5bb9ba880a1179f4ab2a.png' alt='img'/>

      <div className='grid grid-cols-4 gap-4 w-full max-w-4xl mt-[120px]'>
        <div className='bg-green-300 text-blue-900 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>1</h1>
          <p>This is the first box.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>2</h1>
          <p>This is the second box.</p>
        </div>
        <div className='bg-green-300 text-blue-500  border-blue-500 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>3</h1>
          <p>This is the third box.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>4</h1>
          <p>This is the fourth box.</p>
        </div>
      </div>

      <div className='mt-[80px]'>
      <img  src='https://www.opencampus.xyz/static/media/about.a615f3609bdaa7ec77a4.png' alt='' />
      </div>
      </div>
  )
}

export default Home