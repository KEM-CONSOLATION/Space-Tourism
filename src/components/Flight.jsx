import React from 'react'

const Flight = () => {
  return (
    <div>
        <div className=" mt-28 sm:grid sm:place-items-center md:place-items-start">
          <h1 className='tracking-widest text-semibold text-xl text-white uppercase'>Flight Engineer </h1>
          <h1 className='tracking-widest text-5xl text-white mt-5 uppercase'>Anousheh Ansari</h1>
            <p className=' tracking-widest text-white mt-5 w-96 md:text-left sm:text-center'> Anousheh Ansari is an Iranian American engineer and 
            co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first 
            self-funded woman to fly to the ISS, and the first Iranian in space.  </p>

            <div className="flex gap-4 mt-16 sm:mb-96 md:mb-5">
                <a href="/Crew/Douglas">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Mark">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Victor">
                    <div className=' h-5 w-5 rounded-full bg-gray-500'></div>
                </a>
                <a href="/Crew/Flight">
                    <div className=' h-5 w-5 rounded-full bg-white'></div>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Flight