import React from 'react'

const HomeBody = () => {
  return (
    <div className='flex justify-around items-center pt-32'>
    <div className='text-white w-96'>
        <h1 className='tracking-widest text-xl'>SO, YOU WANT TO TRAVEL TO <span className='text-bold text-9xl'>SPACE</span></h1>
        <p className='text-md pt-8 tracking-widest'>Let’s face it; if you want to go to space, 
        you might as well genuinely go to outer space and not hover kind of on the edge of it. 
        Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>

    <div className='relative bg-white h-80 w-80 rounded-full flex justify-center items-center'>
        <p className='absolute font-semibold text-4xl '>Explore</p>
    </div>
    </div>
  )
}

export default HomeBody