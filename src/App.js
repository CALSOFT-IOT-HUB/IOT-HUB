import React from 'react'
import Sidebar from './Components/Sidebar'
import MainBody from './Components/MainBody'
import './App.css'
const App = () => {
  return (
    <>
      <div className='App'>
        <div className='App-sidebar'>
          <Sidebar />
        </div>
        <div className='App-main'>
          <MainBody/>
        </div>
      </div>
    </>
  )
}

export default App
