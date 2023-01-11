import React from 'react'

const Mars = () => {
  return (
    <div>
      <h1 className='tracking-widest text-semibold text-9xl text-white mt-8'>MARS</h1>
      <p className=' text-white mt-5'> Don’t forget to pack your hiking boots. 
      You’ll need them to tackle Olympus Mons, the tallest planetary mountain in 
      our solar system. It’s two and a half times the size of Everest!</p>
        <hr  className=' mt-9 border-b-1 bg-gray-400'/>

        <div className=' mx-auto grid md:grid-cols-2 gap-4 mt-9'>
            <div className=" mx-auto grid md:grid-rows-2 gap-0">
                <p className=' text-gray-400'> AVG. DISTANCE</p>
                <h3 className=' text-3xl text-white'> 225 MIL. KM</h3>
            </div>
            <div className=" mx-auto grid grid-rows-2 gap-0">
                <p className='text-gray-400'> Est. travel time</p>
                <h3 className='text-3xl text-white'> 9 MONTHS</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Mars