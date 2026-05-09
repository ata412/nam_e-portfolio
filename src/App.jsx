import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'

export default function App() {
  return (
    <>
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </>
  )
}
