import React from 'react';
import './App.css';
import Navigaition from './components/Navigaition';
import background from './home.png';
import HomeItem from './components/HomeItem'
import HomeItem2 from './components/HomeItem2'



function App() {
  return (
    <div>
      <div className='h-screen flex-col relative' style={{ backgroundImage: `url(${background})`}}>
      
        

        <div><Navigaition /></div>
       <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex  justify-around'>
        <HomeItem />
        <div className=' ml-80 self-end w-72'><HomeItem2 /></div>
        
        </div>

      
    </div>

    </div>
  );
}

export default App;
