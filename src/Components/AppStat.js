import React from 'react'
import './Stat.css';
import Card from '../Utils/Card';
const AppStat = () => {
  return (
    <>
        <div className='Main_body_item2'>
        <p>Application Statistics</p>
        <div className='Main_body_child2'>
          {
            [1,2,3,4].map((item, index) => {
              return <Card key={index}/>
            })
}
           
        </div>
            </div>
    </>
  )
}

export default AppStat
