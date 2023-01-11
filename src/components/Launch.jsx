import React from 'react'

const Launch = () => {
  return (
        <div className='flex gap-28 items-center mt-16'>
            <div className="grid grid-cols gap-10">
                <a href="/Technology/Launch">
                    <div className=' h-20  w-20 rounded-full bg-white flex justify-center items-center '>
                        <p className=' text-5xl'>1</p>
                    </div>
                </a>
                <a href="/Technology/SpacePort">
                    <div className=' h-20  w-20 rounded-full border border-neutral-400 flex justify-center items-center'>
                        <p className=' text-5xl text-white'>2</p>
                    </div>
                </a>
                <a href="/Technology/SpaceCapsule">
                    <div className=' h-20  w-20 rounded-full border border-neutral-400 flex justify-center items-center'>
                        <p className=' text-5xl text-white'>3</p>
                    </div>
                </a>
            </div>

            <div className="">
            <h1 className='tracking-widest text-semibold text-xl text-gray-500 uppercase'>THE TERMINOLOGY… </h1>
            <h1 className='  text-5xl text-white mt-5 uppercase'>LAUNCH VEHICLE</h1>
                <p className=' text-white mt-5 w-96 tracking-widest'> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry 
                a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
                Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! </p>
            </div>
            <div className=' bg-white h-96 w-96 rounded flex '></div>
        </div>
        
  )
}

export default Launch