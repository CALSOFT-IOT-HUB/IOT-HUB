import React from 'react'
import AppStat from './AppStat'
const MainBody = () => {
  return (
    <div>
      <div className='Main_body_item'>
        <p className='Main_body_child_p'>
          Welcom Team<br/>{new Date().toDateString()}</p>
         <AppStat/>
      </div>
    </div>
  )
}

export default MainBody
