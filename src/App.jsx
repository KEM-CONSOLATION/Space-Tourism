import './App.css';

function App() {
  return (
    <div className="App">
      <div className=""> 
      <header className=''>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div className=''>
            
          </div>
          <div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
              <li>
                <a className='hover:text-gray-500' href="wwww">Product</a>
              </li>
              <li>
                <a className='hover:text-gray-500' href="wwww">Solution</a>
              </li>
              <li>
                <a className='hover:text-gray-500' href="wwww">Resources</a>
              </li>
              <li>
                <a className='hover:text-gray-500' href="wwww">Developers</a>
              </li>
              <li>
                <a className='hover:text-gray-500' href="wwww">Pricing</a>
              </li>
            </ul>
          </div>

          <div>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded hover:bg-[#87acec]'>Sign In</button>
          </div>
        </nav>
      </header>
    </div>
    </div>
  );
}

export default App;
