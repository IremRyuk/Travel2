import React from 'react'
import '../styles/FullItems/fullitems.css'
import {Link} from 'react-router-dom'

export default function Box({main}) {
  return (
    <Link to={`/selectedpaige/${main.id}`} className='items2'>
      <img src={main.img} className='items-img' alt='travel page box'/>
      <center><p className='items-price'>Name: {main.title}</p></center>
      <center><p className='items-price'>Price: {main.price} $</p></center>
    </Link>
  )
}
