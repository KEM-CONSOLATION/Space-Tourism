import Layout from './Layout'
import { Outlet } from 'react-router-dom'
const Technology = () => {
  return (
    <div>
      <Layout activeNav='Technology'>
      <div className="max-w-5xl mx-auto grid md:grid-rows sm:grid-rows-1 gap-4">
          <div className="flex gap-4 text-white text-2xl"><span className='text-gray-500'>03</span><h1 className=' uppercase'>SPACE LAUNCH 101</h1></div>
          
          <Outlet />
        </div>
      </Layout>
    </div>
  )
}
export default Technology