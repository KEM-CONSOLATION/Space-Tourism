import './App.css';
import Logo from './Imgs/Logo.png'
function App() {
  return (
    <div className="App">
      <div className="BG" >
        <div>
          <header className=''>
            <nav className='flex justify-between items-center w-[100%] mx-auto py-10'>
              <div className=''>
                <img className='w-20' src={Logo} alt="..." srcset="" />
              </div>
              <div className='bg-white md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-20 py-10'>
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


        <div className='flex justify-around items-center'>
            <div className='text-white w-96'>
              <h1 className='text-bold text-9xl'>Space</h1>
              <p className='text-md pt-8 tracking-widest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Nulla consequuntur doloribus accusamus enim laborum magni reprehenderit fuga deleniti,
               excepturi sed? Blanditiis quas culpa sit reiciendis eveniet voluptatibus corrupti inventore
                quibusdam! Cumque at dignissimos consequuntur nihil commodi quo, quis veritatis dolore et 
                porro minus amet rerum labore obcaecati officiis maiores animi!</p>
            </div>

            <div className='relative bg-white h-80 w-80 rounded-full flex justify-center items-center'>
              <p className='absolute '>Explore</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
