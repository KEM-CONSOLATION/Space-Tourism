import React from 'react'

const Europa = () => {
  return (
    <div>
      <h1 className='tracking-widest text-semibold text-9xl text-white mt-8 sm:text-center uppercase'>Europa</h1>
      <p className=' text-white mt-5 sm:text-center md:text-left tracking-widest'> The smallest of the four Galilean moons orbiting Jupiter, 
      Europa is a winter lover’s dream. With an icy surface, 
      it’s perfect for a bit of ice skating, curling, hockey, or 
      simple relaxation in your snug wintery cabin.</p>
        <hr  className=' mt-9 border-b-1 bg-gray-400'/>

        <div className=' sm:flex mx-auto grid md:grid-cols-2 gap-4 mt-9 uppercase'>
        <div className=" mx-auto grid md:grid-rows-2 gap-0 sm:text-center">
                <p className=' text-gray-400'> AVG. DISTANCE</p>
                <h3 className=' text-3xl text-white'> 628 MIL.KM</h3>
            </div>
            <div className=" mx-auto grid grid-rows-2 gap-0 sm:text-center">
                <p className='text-gray-400'> Est. travel time</p>
                <h3 className='text-3xl text-white uppercase'> 3 years</h3>
            </div>
        </div>
    </div>
  )
}

export default Europa