import React from 'react'


const Douglas = () => {
  return (
    <div >
        <div className=" mt-28 sm:grid sm:place-items-center md:place-items-start">
          <h1 className='tracking-widest text-semibold text-xl text-gray-500 uppercase'>Commander </h1>
          <h1 className='tracking-widest text-5xl text-white mt-5 uppercase'>Douglas Hurley</h1>
          <p className=' tracking-widest text-white mt-5 w-96 md:text-left sm:text-center'> Douglas Gerald Hurley is an American engineer, 
            former Marine Corps pilot and former NASA astronaut. He launched into space for the third 
            time as commander of Crew Dragon Demo-2.</p>

            <div className="flex gap-4 mt-16 mb-96 md:mb-5">
                <a href="/Crew/Douglas">
                    <div className=' h-5 w-5 rounded-full bg-white'></div>
                </a>
                <a href="/Crew/Mark">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
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

export default Douglas