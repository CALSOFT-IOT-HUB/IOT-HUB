import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../Components/Stat.css';
const StatusCard = ({data,fun}) => {
    const options = [
        { value: '1', label: 'TEMPERATURE_SENSOR' },
        { value: '2', label: 'PRESSURE_SENSOR' },
        { value: '3', label: 'HUMIDITY_SENSOR' },
        { value: '4', label: 'FLUID_SENSOR' },
        { value: '5', label: 'PIEZO_SENSOR' }
      ];
    const [toggle, settoggle] = useState(false)
    const deleteItem=async (id)=>{
        console.log( `${id} is deleted`);
        try {
            const setHeader = {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                }
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${id}/`, setHeader);
            console.log(res.status);
            fun();
        }catch (error) {
                console.log(`The error is ${error}`);}
            
    }
    const ToggleItem=async (id)=>{
        console.log( `${id} is toggled`);
        try {

            const setHeader = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "active_status": !toggle
                })
            }
            const res = await fetch(`https://hasibnirban.pythonanywhere.com/sensor/${id}/toggle_status/`, setHeader);
            if(res.status===200){
            fun();
            }
            
        }catch (error) {
                console.log(`The error is ${error}`);}
            }

  return (
       <div className='card_2'>
   <input type='checkbox' name="checkbox" onClick={()=>settoggle(!toggle)}/>
   <Link to={`/editpage/${data.id}`} id="card_link">
      <h3>{data.sensor_id}</h3>
      <p>{data.sensor_name}</p>
      <p>{options[data.sensor_type-1].label}</p>
      <p>{data.sensor_value}</p>
      {data.active_status?<p style={{color:"green"}}>Online </p>:<p style={{color:"red"}}>Offline </p>}
      </Link>
     { toggle? <button onClick={()=>deleteItem(data.id)} id="delbtn">Delete</button>:""}
     { toggle? <button onClick={()=>ToggleItem(data.id)}  id="togglebtn">Toggle Status</button>:""}
    </div>
  )
}
export default StatusCard;

