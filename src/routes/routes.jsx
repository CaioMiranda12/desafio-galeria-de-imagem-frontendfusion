import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Header } from '../components'



export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Home />} />
      </Routes>
    </Router>
  )
}