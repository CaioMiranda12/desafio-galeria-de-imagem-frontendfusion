import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorite } from '../pages/Favorite'

import { Header } from '../components'
import { Info } from '../pages/Info'



export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorite />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </Router>
  )
}