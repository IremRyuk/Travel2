import React from 'react'

export default function Search() {
  return (
    <div>
      <center><input type='text' onChange={(e)=>{dispatch({type:'search', searches:e.target.value })}} className='item-search hideShow' placeholder='search...' /></center>
    </div>
  )
}
