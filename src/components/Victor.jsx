import React from 'react'

const Victor = () => {
  return (
    <div>
        <div className=" mt-28 sm:grid sm:place-items-center md:place-items-start">
          <h1 className='tracking-widest text-semibold text-xl text-white uppercase'>PILOT </h1>
          <h1 className='tracking-widest text-5xl text-white mt-5 uppercase'>Victor Glover</h1>
          <p className=' tracking-widest text-white mt-5 w-96 sm:text-center md:text-left'> Pilot on the first operational flight of the SpaceX Crew
             Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an
              F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>

            <div className="flex gap-4 mt-16 mb-96 md:mb-5">
                <a href="/Crew/Douglas">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Mark">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Victor">
                    <div className=' h-5 w-5 rounded-full bg-white'></div>
                </a>
                <a href="/Crew/Flight">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Victor