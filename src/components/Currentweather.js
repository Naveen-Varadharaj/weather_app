import React, {useContext } from 'react'
import { UserContext } from './Weather';
import water from '../images/water.png'
import wind from '../images/wind.png'

import up from '../images/up-arrow.png'

import down from '../images/down-arrow.png'

import pressure from '../images/pressure.png'

export default function Currentweather() {
    const [detail,forcast]= useContext(UserContext);
    console.log(forcast);
  return (<>
    <div className='text-xl font-bold text-center mt-5  text-white'>Current Weather</div>
    <div className=' mb-10 bg-lime-400 py-3 px-2 rounded-lg'>
    
    <div className='flex justify-around my-3'><div className='text-xl font-semibold'>{detail.name}</div><div><h4 className='text-lg font-semibold font-mono'>Feels Like {detail.main.feels_like}°C</h4></div></div> 
    <div className='flex justify-around '>
    <div className='grid grid-col-1 '>
    <div className='flex'>
    <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} alt='pic' />
    <h1 className='text-4xl my-auto'>{detail.main.temp}°</h1>
    </div>
    <div className='text-center text-base font-bold'><h4> {detail.weather[0].main}</h4></div>
    </div>
    <div className='grid gap-y-4 bg-lime-600 w-1/2 px-3 py-3 rounded-lg'>
    

    <div className='flex w-full justify-around '>
    <div className='flex w-fit'>
      <img src={up} alt='hign'></img>
      <h4 className='my-auto'>{detail.main.temp_max} °C</h4></div>
    <div className='flex w-fit'>
      <img src={down} alt='low'></img> 
      <h4 className='my-auto'>{detail.main.temp_min} °C</h4></div>
    </div>

    <div className='flex '>
      <div className='w-2/3'><img src={water} alt='Humidity' className=''></img></div>
      <h4 className=' my-auto font-mono font-semibold w-2/3 '>Humidity</h4> <h4 className=' my-auto font-mono font-semibold w-2/3 text-center '>{detail.main.humidity}%</h4></div>
    <div className='flex justify-between'>
      <div className='w-2/3'><img src={wind} alt='wind' className=''></img> </div>
      <h4 className=' my-auto font-mono font-semibold w-2/3 '>Wind</h4> <h4 className=' my-auto font-mono font-semibold w-2/3 text-center '>{detail.wind.speed}kph</h4></div>
    <div className='flex justify-between'>
      <div className='w-2/3'><img src={pressure} alt='pressure' className=''></img> </div>
      <h4 className=' my-auto font-mono font-semibold w-2/3 '>Pressure</h4> <h4 className=' my-auto font-mono font-semibold w-2/3 text-center '>{detail.main.pressure}hPa</h4></div>
    </div>
    </div>
 
  
  
   


</div>
</>
  )
}
