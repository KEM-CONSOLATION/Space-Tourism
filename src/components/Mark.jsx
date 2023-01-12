import React from 'react'

const Mark = () => {
  return (
    <div>
        <div className=" mt-28 sm:grid sm:place-items-center md:place-items-start">
          <h1 className='tracking-widest text-semibold text-xl text-white uppercase'>Mission Specialist  </h1>
          <h1 className='tracking-widest text-5xl text-white mt-5 uppercase'>MARK SHUTTLEWORTH</h1>
          <p className=' tracking-widest text-white mt-5 w-96 md:text-left sm:text-center'> Mark Richard Shuttleworth is the founder and CEO of Canonical,
                         the company behind the Linux-based Ubuntu operating system. Shuttleworth became the 
                         first South African to travel to space as a space tourist.</p>

            <div className="flex gap-4 mt-16 md:mb-5">
                <a href="/Crew/Douglas">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Mark">
                    <div className=' h-5 w-5 rounded-full bg-white'></div>
                </a>
                <a href="/Crew/Victor">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Flight">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mark