import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Housing from './Pages/Housing'
import NotFound from './Pages/NotFound'

export default function router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/logement/:id' element={<Housing />} />
        <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
