import React from 'react'

const Card = ({data}) => {
  console.log(data);
  return (
    <div className='card'>
      <h3>{data}</h3>
      <p>full-fledged Devices</p>
    </div>
  )
}

export default Card
