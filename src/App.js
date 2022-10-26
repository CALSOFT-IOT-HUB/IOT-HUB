import React, {useEffect, useState} from "react";
import './App.css'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'
import Sidebar from "./Components/Sidebar";
const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 880;
  return (
      <div className='App'>
       {
        isMobile ?  <Sidebar/>: ""
      }
    <div className='scroll-content-left'>
      {
        isMobile ?  "": <Header/>
      }
      
      </div>
      <div className='scroll-content-right'>
      <Dashboard/>
      </div>
      </div>
  )
}

export default App
