import React from 'react'

const Moon = () => {
  return (
    <div>
      <h1 className='tracking-widest text-semibold text-9xl text-white mt-8 sm:text-center uppercase'>MOON</h1>
      <p className=' text-white mt-5 sm:text-center md:text-right'> See our planet as you’ve never seen it before. A perfect relaxing trip away to 
        help regain perspective and come back refreshed. While you’re there, take in some 
        history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <hr  className=' mt-9 border-b-1 bg-gray-400'/>

      <div className=' sm:flex mx-auto grid md:grid-cols-2 gap-4 mt-9 uppercase'>
        <div className=" mx-auto grid md:grid-rows-2 gap-0 sm:text-center">
          <p className=' text-gray-400'> AVG. DISTANCE</p>
          <h3 className=' text-3xl text-white'> 384,400 KM</h3>
        </div>
        <div className=" mx-auto grid grid-rows-2 gap-0 sm:text-center">
          <p className='text-gray-400'> Est. travel time</p>
          <h3 className='text-3xl text-white'> 3 days</h3>
        </div>
      </div>
        
    </div>
  )
}

export default Moon