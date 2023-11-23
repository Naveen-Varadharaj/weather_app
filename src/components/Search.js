import React, {useContext } from 'react'
import { UserContext } from './Weather';


export default function Search() {
    const [search, setSearch, setSer] = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSer(search);
        setSearch("")

    }
  return (

        <div className='' >
                <form onSubmit={handleSubmit}> 
                <input type='text' placeholder='search'value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
                <button value='submit' hidden={ search===null || search===undefined || search===''}>submit</button></form>
            </div>
  
  )
}
