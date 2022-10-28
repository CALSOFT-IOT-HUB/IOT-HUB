import React,{useEffect,useState} from 'react'
import './Stat.css';
import StatusCard from '../Utils/StatusCard';

const StatusBoard = () => {
  const [data, setdata] = useState([])
  const getData=async ()=>{
    try {
      const res = await fetch("https://hasibnirban.pythonanywhere.com/sensor/");
      const data = await res.json();
      setdata(data);
    }catch (error) {
      console.log(`The error is ${error}`);
    }
  }
  useEffect(() => {
    getData();
  }, [])
 
  const fun_cal=()=>{
   getData();
  }

  
  return (
    <>
      <div className='Main_body_item2'>
        <p>Status Board</p>
       
        <div className='status_child2'>
          {
            data.map((item, index) => {
              return(
                < >
                
              <StatusCard data={item} fun={fun_cal} key={index}/>
              
              </>
              );
            })
}
        </div>
            </div>
    </>
  )
}

export default StatusBoard
