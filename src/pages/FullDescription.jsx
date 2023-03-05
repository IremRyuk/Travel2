import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../storage/data.json'
import '../styles/Selected/selected.css'
import Nav from '../components/Nav'
import { Initial_Values, reducer } from '../components/UseReducer'
import $ from 'jquery'

export default function FullDescription() {
  // global values
  const [state,dispatch] = useReducer(reducer,Initial_Values)
// brighntess
useEffect(()=>{
  let Saved_Bright = parseInt(localStorage.getItem('brightness'))
  console.log(Saved_Bright)
  let bright = () =>{
    if(Saved_Bright>=0 || Saved_Bright<=100){
      $('.navigation').css({top:'-29%'})
      $('.selected').css({filter:"brightness("+Saved_Bright+"%)"})  
    }
    else{
      $('.navigation').css({top:'0%'})
    }
  }
  bright()
},[])
  // get data from main paige
    const {ID} = useParams()
    let filtered = Data.filter(res=>res.id === parseInt(ID))
    let MainData = filtered[0]
    // console.log(MainData.id)

    // icrement and decrement // amount of items
    let minus = () =>{
      if(state.selectedItems === 0){
        return
      }else{
        dispatch({type:'decrement'})
        dispatch({type:'amount',payload:state.selectedAmount -  MainData.price})
      }
      
    }
    let plus = () =>{
      if(state.selectedItems === MainData.current){
        $('.ghost').css({left:'5%'})
        return
      }else{
        dispatch({type:'increment'})
        dispatch({type:'amount',payload:MainData.price *  state.selectedItems + MainData.price})
      }
    }
    // buy item
    const buy = () =>{
      if(state.selectedItems === 0){
        setTimeout(()=>{
          $('.buyItem').css({animation:'none'})
        $('.current').css({animation:'none'})
        },1500)
          $('.buyItem').css({animation:'1.5s redBtn linear'})
          $('.current').css({animation:'1.5s redBtn linear'})
      }else{
        alert('congrats you bought this item')
        dispatch({type:'zero'})
      }
    }
  return (
    
    <div className='selected'>
      <Nav />
      <div className='sel-img'>
<img src={MainData.img} className='sel-img-cur' alt='Travel Tools' />
      </div>
      <div className='sel-decr'>
        <p className='sel-decr-par'>Name: {MainData.title}</p>
        <p className='sel-decr-par'>Category: {MainData.category}</p>
        <p className='sel-decr-par'>Price: {MainData.price} $</p>
        <p className='sel-decr-par'>Current: {state.selectedAmount} $</p>
        <div className='buy'>
          <button className='buys btnLeft' onClick={()=>{minus()}}>-</button>
          <p className='current'>{state.selectedItems}</p>
          <button className='buys btnRight' onClick={()=>{plus()}}>+</button>
        </div>
        <center><button className='buyItem' onClick={()=>buy()}>Buy</button></center>
      </div>
      <div className='ghost' onClick={()=>{$('.ghost').css({left:'-100%'})}}>Maximum Amount of items Selected</div>
    </div>
  )
}
