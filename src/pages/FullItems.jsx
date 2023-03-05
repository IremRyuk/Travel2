import React, {useEffect,useReducer, useState } from 'react'
import Nav from '../components/Nav'
import Data from '../storage/data.json'
import '../styles/FullItems/fullitems.css'
import Box from './Box'
import { Initial_Values, reducer } from '../components/UseReducer'
import $ from 'jquery'

export default function FullItems() {
    //  valeus
    const [state,dispatch] = useReducer(reducer,Initial_Values)
    const [screenSize,setScreenSize] = useState(window.innerWidth)
// look for screen size
useEffect(()=>{
window.addEventListener('resize',()=>{
  setScreenSize(window.innerWidth)
})
},[])
    // Data storage
    let [data,setData] = useState(Data)
    // filter items by category names
    let filterItems = (key) =>{
        let newData = Data.filter(res=>{
            return res.category === key
        })
setData(newData)
    }
    // filter names from select on mini screen
    let filterItems2 = (info2) =>{
let newData2 = Data.filter(res=>{
    return res.category === info2
})
if(info2 === 'all'){
  setData(Data)
}else{
  setData(newData2)
}
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
      {screenSize <= 500 && <center><select onClick={()=>{filterItems2(state.selectFilter)}} onChange={(e)=>{dispatch({type:'selectFilter',payload:e.target.value})}} className='mini-categories'>
        <option  value='all'>All Items</option>
        <option  value='electronic'>Electronic</option>
        <option  value='bag'>Bags</option>
        <option  value='sunglasees'>Sunglasees</option>
      </select></center>}
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

