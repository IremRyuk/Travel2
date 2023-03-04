import React from 'react'
import '../styles/Nav/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='navigation'>
      <div className='homeLink'>
        <Link to='/' className='homeLinkTo'>My Travel</Link>
      </div>
      <ul className='listLinks'>
        <li><Link to='/fullitems' className='homeLinkToList'>Shop</Link></li>
        <li><Link to='/more' className='homeLinkToList'>More</Link></li>
      </ul>
    </div>
  )
}
