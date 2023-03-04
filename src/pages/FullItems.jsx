import React, {useReducer, useState } from 'react'
import Nav from '../components/Nav'
import Data from '../storage/data.json'
import '../styles/FullItems/fullitems.css'
import Box from './Box'
import { Initial_Values, reducer } from '../components/UseReducer'

export default function FullItems() {
    // global valeus
    const [state,dispatch] = useReducer(reducer,Initial_Values)
    // Data storage
    let [data,setData] = useState(Data)
    // brightness
    // useEffect(()=>{
    //     let Saved_Bright = parseInt(localStorage.getItem('brightness'))
    //     let bright = () =>{
    //       $('.allitems').css({filter:"brightness(" + Saved_Bright +"%)"})
    //     }
    //     bright()
    //   })
    // filter items by category names
    let filterItems = (key) =>{
        let newData = Data.filter(res=>{
            return res.category === key
        })
setData(newData)
    }
  return (
    <div className='allitems'>
      <Nav />
      <center><input type='text' onChange={(e)=>{dispatch({type:'search', searches:e.target.value })}} className='full-items-search' placeholder='search...' /></center>
      <div className='find-categories'>
      <button className='find' onClick={()=>{setData(Data)}}>All</button>
      <button className='find' onClick={()=>{filterItems('electronic')}}>electronic</button>
      <button className='find' onClick={()=>{filterItems('bag')}}>bags</button>
      <button className='find' onClick={()=>{filterItems('sunglasees')}}>sunglasees</button>
      </div>
      <div className='listItems'>
        {data.filter(info=>{
            if(state.search === ''){
                return Data
            }else if(info.title.toLowerCase().includes(state.search.toLowerCase())){
                return state.search
            }
        }).map(res=>
            <Box key={res.id} main={res}/>
        )}
      </div>
    </div>
  )
}

