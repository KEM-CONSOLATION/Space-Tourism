import Layout from './Layout'
const HomeBody = () => {
  return (
    <div>
      <Layout activeNav='home'>
        <div className='md:flex md:justify-around md:items-center pt-32 grid grid-row justify-center items-center'>
          <div className='text-white w-96 text-center md:text-start mb-40'>
              <h1 className='tracking-widest text-lg md:text-xl text-gray-500 '>SO, YOU WANT TO TRAVEL TO <span className='text-white text-bold text-8xl md:text-9xl tracking-widest'>SPACE</span></h1>
              <p className='text-sm pt-8 tracking-widest'>Let’s face it; if you want to go to space, 
              you might as well genuinely go to outer space and not hover kind of on the edge of it. 
              Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='relative bg-white h-80 w-80 rounded-full flex justify-center items-center'>
              <p className='absolute font-semibold text-4xl '>Explore</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default HomeBody