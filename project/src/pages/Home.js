import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assests/Animation - 4.json'

const Home = () => {
  return (
    <div className="gradient">
     <div className='min-h-screen flex items-center justify-center '>
    <div className='text-center space-y-4 w-1/2'>
     <h1 className='text-2xl  font-sans  text-white font-semibold flex justify-start items-start opacity-85'>The security first platform</h1>
     <div className='text-5xl text-start text-white font-sans font-bold flex justify-start mr-[70px] opacity-85 '>
     <h3>Simplify your security with <br/>authentication servicess</h3>
      </div>
      <div className='text-xl  text-white font-sans font-bold flex justify-start mr-[70px] text-start opacity-85'>
      <p>Define access roles for the end-users, and extend your <br/> authorization capabilities to implement dynamic access <br/> control.</p>
      </div>

      {/* //button  */}
      <div className="grid grid-cols-1 gap-4 w-[236px] pt-4">
        <button className="bg-[#0f172a]  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none  focus:shadow-outline">
          Simplify your security
        </button>
        <button className="bg-[#0f172a] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          Customer identity
        </button>
        <button className="bg-[#0f172a] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          Adaptable authentication
        </button>
      </div>  

    </div>
    <Lottie animationData={animationData} className='bg-transparent pb-20 border-none w-[500px]  pt-[50px]'/>
  </div>
  </div>
  )
}

export default Home