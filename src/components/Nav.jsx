import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">e-Portfolio</Link>
      {!isHome && (
        <Link to="/" className="nav-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Back to Home
        </Link>
      )}
    </nav>
  )
}
