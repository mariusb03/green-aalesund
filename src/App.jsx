{/* App.jsx */}
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Donations from './pages/Donations'
import EstateClearance from './pages/EstateClearance'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="om-oss" element={<About />} />
        <Route path="donasjoner" element={<Donations />} />
        <Route path="tomming-dodsbo" element={<EstateClearance />} />
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App