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
            [6,12,18].map((item, index) => {
              return <Card key={index} data={item}/>
            })
}
           
        </div>
            </div>
    </>
  )
}

export default AppStat
