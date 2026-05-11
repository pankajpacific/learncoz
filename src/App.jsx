import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { websiteRoutes } from './routes/websiteRoutes.jsx'
import { adminRoutes } from './routes/adminRoutes.jsx'
import { userRoutes } from './routes/userRoutes.jsx'
import Navbar from './modules/website/components/Navbar.jsx'
import Footer from './modules/website/components/Footer.jsx'
import './App.css'

function App() {
  const allRoutes = [...websiteRoutes, ...adminRoutes, ...userRoutes]

  return (
    <Router>
      <Navbar />
      <Routes>
        {allRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
