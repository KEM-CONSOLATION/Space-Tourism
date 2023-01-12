import React from 'react'
import Layout from './Layout'
import { Outlet, NavLink } from 'react-router-dom'

export default function Destination() {
  let activeStyle = {
    borderBottom: "5px solid white",
  };

  // let activeClassName = "underline";

  return (
    <div>
      <Layout activeNav='Destination'>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 sm:grid-rows-1 gap-4">
          <div className=" sm:mt-5 md:mt-0 flex gap-4 text-white text-2xl"><span className='text-gray-500'>01</span><h1 className=' uppercase'>Pick your destination</h1></div>
          <div className="">
            <div className='xs:flex xs:flex-rpw sm:flex sm:flex-row sm:mt-60 md:mt-0 md:items-center sm:justify-center'>
              <NavLink className='hover:text-gray-500 px-7' to="/Destination/Moon" style={({ isActive }) => isActive ? activeStyle : undefined }>
                <div className='px-2 text-white py-6'>Moon</div>
              </NavLink>
              <NavLink className='hover:text-gray-500 px-7' to="/Destination/Mars" style={({ isActive }) => isActive ? activeStyle : undefined }>
                <div className='px-2 text-white py-6'>Mars</div>
              </NavLink>
              <NavLink className='hover:text-gray-500 px-7' to="/Destination/Europa" style={({ isActive }) => isActive ? activeStyle : undefined }>
                <div className='px-2 text-white  py-6'>Europa</div>
              </NavLink>
              <NavLink className='hover:text-gray-500 px-7' to="/Destination/Titan" style={({ isActive }) => isActive ? activeStyle : undefined }>
                <div className='px-2 text-white py-6'>Titan</div>
              </NavLink>
            </div>
              <Outlet />
          </div>
        </div>
      </Layout>
    </div>
  )
}
