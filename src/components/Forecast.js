import React, {useContext } from 'react'
import { UserContext } from './Weather';


export default function Forecast() {
    const [detail,forcast] = useContext(UserContext);
    console.log(detail);
  return (
    <>
               <div className='text-xl font-bold text-center text-white'>Extended Forcast</div>
                 <div className='flex bg-lime-400 rounded-lg  py-3 px-2'>

                 <div className='grid justify-items-center mx-auto'>
                    <div className='font-semibold' >{forcast.list[7].dt_txt.slice(0,11)}</div>
                    <img src={`http://openweathermap.org/img/wn/${forcast.list[7].weather[0].icon}@2x.png`} alt='pic' />
                    <div className='font-semibold font-mono'>{forcast.list[7].weather[0].main}</div>                   
                    <div className='flex'>
                    <div className='font-semibold'>{Math.round(forcast.list[7].main.temp_min)}°</div>/
                    <div className='font-semibold'>{Math.round(forcast.list[7].main.temp_max)}°</div>
                    </div>
                    </div>

                    <div className='grid justify-items-center mx-auto'>
                    <div className='font-semibold'>{forcast.list[15].dt_txt.slice(0,11)}</div>
                    <img src={`http://openweathermap.org/img/wn/${forcast.list[15].weather[0].icon}@2x.png`} alt='pic' />
                    <div className='font-semibold font-mono'>{forcast.list[15].weather[0].main}</div>                   
                    <div className='flex'>
                    <div className='font-semibold'>{Math.round(forcast.list[15].main.temp_min)}°</div>/
                    <div className='font-semibold'>{Math.round(forcast.list[15].main.temp_max)}°</div>
                    </div>
                    </div>

                    <div className='grid justify-items-center mx-auto'>
                    <div className='font-semibold'>{forcast.list[23].dt_txt.slice(0,11)}</div>
                    <img src={`http://openweathermap.org/img/wn/${forcast.list[23].weather[0].icon}@2x.png`} alt='pic' />
                    <div className='font-semibold font-mono'>{forcast.list[23].weather[0].main}</div>                   
                    <div  className='flex'>
                    <div className='font-semibold'>{Math.round(forcast.list[23].main.temp_min)}°</div>/
                    <div className='font-semibold'>{Math.round(forcast.list[23].main.temp_max)}°</div>
                    </div>
                    </div>

                    <div className='grid justify-items-center mx-auto'>
                    <div className='font-semibold'>{forcast.list[31].dt_txt.slice(0,11)}</div>
                    <img src={`http://openweathermap.org/img/wn/${forcast.list[31].weather[0].icon}@2x.png`} alt='pic' />
                    <div className='font-semibold font-mono'>{forcast.list[31].weather[0].main}</div>                   
                    <div className='flex'>
                    <div className='font-semibold'>{Math.round(forcast.list[31].main.temp_min)}°</div>/
                    <div className='font-semibold'>{Math.round(forcast.list[31].main.temp_max)}°</div>
                    </div>
                    </div>

                    <div className='grid justify-items-center mx-auto'>
                    <div className='font-semibold'>{forcast.list[39].dt_txt.slice(0,11)}</div>
                    <img src={`http://openweathermap.org/img/wn/${forcast.list[39].weather[0].icon}@2x.png`} alt='pic' />
                    <div className='font-semibold font-mono'>{forcast.list[39].weather[0].main}</div>                   
                    <div className='flex'>
                    <div className='font-semibold'>{Math.round(forcast.list[39].main.temp_min)}°</div>/
                    <div className='font-semibold'>{Math.round(forcast.list[39].main.temp_max)}°</div>
                    </div>
                    </div>


                </div>
                </>
  )
}


 