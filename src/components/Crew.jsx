import Layout from './Layout'
import { Outlet } from 'react-router-dom'
// import React, { Component } from 'react'
const Crew = () => {
  return (
    <div>
      <Layout activeNav='Crew'>
        <div className="max-w-5xl mx-auto grid md:grid-rows sm:grid-rows-1 gap-4">
          <div className="flex gap-4 text-white text-2xl"><span className='text-gray-500'>02</span><h1 className=' uppercase'>Meet your crew</h1></div>
          
          <Outlet />
        </div>
      </Layout>
    </div>
  )
}
export default Crew