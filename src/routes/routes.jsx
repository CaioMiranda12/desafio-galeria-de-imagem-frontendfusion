import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorite } from '../pages/Favorite'

import { Header } from '../components'



export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorite />} />
      </Routes>
    </Router>
  )
}