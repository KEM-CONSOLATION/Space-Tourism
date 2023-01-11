import React, { Component } from 'react'
import Layout from './Layout'
import Moon from './Moon'

export default class Destination extends Component {
  render() {
    return (
      <div>
      <Layout activeNav='Destination'>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="flex gap-4 text-white text-2xl"><span className='text-gray-500'>01</span><h1>Pick your destination</h1></div>
          <div className="">
            <div className='flex md:flex-row flex-col md:items-center text-lowerCase'>
              <a className='hover:text-gray-500 px-7' href="/">
                <div className='px-2 text-white'>Moon</div>
              </a>
              <a className='hover:text-gray-500 px-7' href="/">
                <div className='px-2 text-white'>Mars</div>
              </a>
              <a className='hover:text-gray-500 px-7' href="/">
                <div className='px-2 text-white'>Europa</div>
              </a>
              <a className='hover:text-gray-500 px-7' href="/">
                <div className='px-2 text-white'>Titan</div>
              </a>
            </div>

            <Moon />
              {this.props.children}
          </div>
        </div>
      </Layout>
    </div>
    )
  }
}
