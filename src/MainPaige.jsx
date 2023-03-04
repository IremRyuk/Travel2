import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import FullDescription from './pages/FullDescription'
import Items from './pages/Items'
import FullItems from './pages/FullItems'
import More from './pages/More'

export default function MainPaige() {
  return (
    <div>
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/item' element={<Items />} />
      <Route path='/fullitems' element={<FullItems />} />
      <Route path='/selectedpaige/:ID' element={<FullDescription />} />
      <Route path='/more' element={<More />} />
      </Routes>
    </div>
  )
}
