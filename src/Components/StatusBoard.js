import React from 'react'
import './Stat.css';
import Status_Card from '../Utils/status_Card';
const statusBoard = () => {
  return (
    <>
      <div className='Main_body_item2'>
        <p>Status Board</p>
        <div className='status_child2'>
          {
            [6,12,18,74,97].map((item, index) => {
              return <Status_Card key={index} data={item}/>
            })
}
        </div>
            </div>
    </>
  )
}

export default statusBoard
