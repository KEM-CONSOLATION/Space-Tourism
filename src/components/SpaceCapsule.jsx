import React from 'react'
import { NavLink } from 'react-router-dom'
const SpaceCapsule = () => {
  return (
    <div className=" sm:grid md:flex gap-28 sm:place-items-center sm:text-center md:text-left sm:mt-40 md:mt-5">
    <div className=' sm:grid md:flex md:gap-28 sm:gap-10 items-center mt-16'>
        <div className=" sm:flex sm:flex-col-3 md:grid md:grid-cols gap-10">
                <NavLink to="/Technology/Launch">
                <div className=' h-20  w-20 rounded-full border border-neutral-400 flex justify-center items-center'>
                        <p className=' text-5xl text-white'>1</p>
                    </div>
                </NavLink>
                <NavLink to="/Technology/SpacePort">
                <div className=' h-20  w-20 rounded-full border border-neutral-400 flex justify-center items-center'>
                        <p className=' text-5xl  text-white'>2</p>
                    </div>
                </NavLink>
                <NavLink to="/Technology/SpaceCapsule">
                <div className=' h-20  w-20 rounded-full bg-white flex justify-center items-center '>
                        <p className=' text-5xl'>3</p>
                    </div>
                </NavLink>
        </div>

            <div className="">
            <h1 className='tracking-widest text-semibold text-xl text-gray-500 uppercase'>THE TERMINOLOGY… </h1>
            <h1 className='  text-5xl text-white mt-5 uppercase tracking-wide'>SPACE CAPSULE</h1>
            <p className=' sm:tracking-widest text-white mt-5 w-96 tracking-widest'> A space capsule is an often-crewed spacecraft that uses a 
                blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities
                to keep you entertained.</p>
            </div>
            </div>
            <div className=' bg-white md:h-96 md:w-96 md:rounded  sm:hidden '></div>
        </div>
  )
}

export default SpaceCapsule