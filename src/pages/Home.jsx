import { useState,useEffect, useReducer } from 'react'
import '../styles/Home/App.css'
import $ from 'jquery'
import Data from '../storage/data.json'
import Items from './Items'
import { Initial_Values, reducer } from '../components/UseReducer'
import Brightness from '../components/Brightness'
import { Link } from 'react-router-dom'
function App() {
  const [state,dispatch] = useReducer(reducer,Initial_Values)
  const [size,setSize] = useState(window.innerWidth)
  console.log(size)
  // useEffct
  useEffect(()=>{
    setTimeout(()=>{
      $('.mainPic').css({right:'50%'})
    },500)
    setTimeout(()=>{
      $('.items').css({display:'grid'})
    },1100)
    setTimeout(()=>{
      $('.centerMenu').css({backgroundColor:'white'})
      $('.hideShow').css({visibility:'visible'})
    },1100)
      // screen size Width
  let size = () =>{
    window.addEventListener('resize',()=>{
      setSize(window.innerWidth)
    })
  }
  size()
  },[])

  let moveImg = () =>{
    // change state of button in image
dispatch({type:'changer'})

// main image movement
if(state.arrow === true) return $('.mainPic').css({right:'0%'})
else return $('.mainPic').css({right:'50%'})
  }
  return (
    <div className="App">
<div className='centerMenu'>
  <div className='settings hideShow'>
    <Brightness />
  </div>
  <div className='mainPic'>
    <button className='imageHandler' onClick={()=>{moveImg()}}><i className={state.arrow?"fa-solid fa-arrow-right arrows":"fa-solid fa-arrow-left arrows"} /></button>
    <p className='travel'>Travel</p>
    <p className='travel2'>Get ready</p>
    <p className='travel3'>collection of the most 
beautiful places 
and experience </p>
<Link to='/fullitems' className='start'><p className='start-link' title='all items'>Get started</p></Link>
  </div>
  
  <div className='menu'>
  <center><p className='header hideShow'>Travel Accessories</p></center>
  <div className='items'>
  {Data.map(res=>
    <Items data={res} key={res.id} />
  )}
  </div>
  </div>
</div>
{/* screen size lower than 1000px */}
{size <= 1000 &&
  <div className='centerMenu-mini'>
<div className='menu-mini'>
  <center><p className='header-mini'>Travel Accessories</p></center>
  <div className='items-mini'>
  {Data.map(res=>
    <Items data={res} key={res.id} />
  )}
  </div>
  </div>
  <button className='menuAllList'>
    <i className="fa-solid fa-bars" />
    <ul className='burger-menu'>
      <li><Link className='links-menu' to='/fullitems'>ALL Items</Link></li>
      <li><Link className='links-menu' to='/more'>More</Link></li>
    </ul>
    </button>
  </div>
}
    </div>
  )
}

export default App
