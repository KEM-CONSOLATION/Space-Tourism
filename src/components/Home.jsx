import React from 'react'
import Logo from '../Imgs/Logo.png'

const Home = () => {
  return (
    <div>
          <header className=''>
            <nav className='flex justify-between items-center w-[100%] mx-auto py-10'>
              <div className=''>
                <img className='w-20' src={Logo} alt="..." srcset="" />
              </div>
              <div className='font-sans text-white bg-gray-600/70 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-20 py-9'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-lowerCase'>
                  <li>
                    <a className='hover:text-gray-500' href="wwww"><span className='px-2 font-bold'>00</span>Home</a>
                  </li>
                  <li>
                    <a className='hover:text-gray-500' href="wwww"><span className='px-2 font-bold'>01</span>Destination</a>
                  </li>
                  <li>
                    <a className='hover:text-gray-500' href="wwww"><span className='px-2 font-bold'>02</span>Crew</a>
                  </li>
                  <li>
                    <a className='hover:text-gray-500' href="wwww"><span className='px-2 font-bold'>03</span>Technology</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
  )
}

export default Home