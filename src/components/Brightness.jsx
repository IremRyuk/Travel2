import React, { useEffect, useReducer } from 'react'
import { Initial_Values, reducer } from './UseReducer'
import '../styles/Home/App.css'

export default function Brightness() {
    let [state,dispatch] = useReducer(reducer,Initial_Values)
    let Saved_Bright = parseInt(localStorage.getItem('brightness'))
    useEffect(()=>{
        let filter = () =>{
          let Saved_Bright = parseInt(localStorage.getItem('brightness'))
            let body = document.querySelector('.App')
            if(state.brightness === NaN){
              body.style.filter = "brightness("+state.brightness+"%)"
            }
            else{
              body.style.filter = "brightness("+Saved_Bright+"%)"
            }
          }
          filter()
    })
    const saveBrightness = () =>{
      localStorage.setItem('brightness',state.brightness)
    }

  return (
    <div>
          <p className='set-range-name'>Change Brightness</p>
         <input type="range" className='set-range' min='40' value={Saved_Bright||'100'} max='100' onChange={(e)=>{dispatch({type:'bright',payload:e.target.value}),saveBrightness()}}/>
    </div>
  )
}
