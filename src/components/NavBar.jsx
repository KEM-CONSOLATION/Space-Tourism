import React from 'react';
import Logo from '../Imgs/Logo.png';
// import HomeBody from './HomeBody';
const Home = (props) => {
  console.log(props.activeNav);
  return (
    <div>
        <header className=''>
          <nav className='flex justify-between items-center w-[100%] mx-auto py-10'>
            <div className=''>
              <img className='w-20' src={Logo} alt="..." srcSet="" />
            </div>
            <div className='font-sans text-white bg-gray-600/70 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-20'>
              <div className='flex md:flex-row flex-col md:items-center text-lowerCase'>
                <a className='hover:text-gray-500 px-7' href="/">
                  <div className={`${props.activeNav === 'home' && 'border-b-2'} border-white py-6`}><span className='px-2 font-bold'>00</span>Home</div>
                </a>
                <a className='hover:text-gray-500 px-7' href="/Destination/Moon">
                  <div className={`${props.activeNav === 'Destination' && 'border-b-2'} border-white py-6`}><span className='px-2 font-bold'>01</span>Destination</div>
                </a>
                <a className='hover:text-gray-500 px-7' href="/Crew">
                  <div className={`${props.activeNav === 'Crew' && 'border-b-2'} border-white py-6`}><span className='px-2 font-bold'>02</span>Crew</div>
                </a>
                <a className='hover:text-gray-500 px-7' href="/Technology">
                  <div className={`${props.activeNav === 'Technology' && 'border-b-2'} border-white py-6`}><span className='px-2 font-bold'>03</span>Technology</div>
                </a>
              </div>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Home