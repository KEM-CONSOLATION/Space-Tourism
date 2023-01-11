import React from 'react'

const SpacePort = () => {
  return (
    <div className='flex gap-28 items-center mt-16'>
            <div className="grid grid-cols gap-10">
                <a href="/Technology/Launch">
                <div className=' h-20  w-20 rounded-full border border-neutral-400 flex justify-center items-center'>
                        <p className=' text-5xl text-white'>1</p>
                    </div>
                </a>
                <a href="/Technology/SpacePort">
                <div className=' h-20  w-20 rounded-full bg-white flex justify-center items-center '>
                        <p className=' text-5xl'>2</p>
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
            <h1 className='  text-5xl text-white mt-5 uppercase tracking-widest'>SPACEPORT</h1>
                <p className=' tracking-widest text-white mt-5 w-96'> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is 
                ideally situated to take advantage of the Earth’s rotation for launch.</p>
            </div>
            <div className=' bg-white h-96 w-96 rounded'></div>
        </div>
  )
}

export default SpacePort