import { Link } from 'react-router-dom'
import { works } from '../data/works'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

function WorkCard({ work }) {
  const num = String(work.id).padStart(2, '0')
  return (
    <Link to={`/work/${work.id}`} className={`card ${work.type}`}>
      <div className="card-num">{num}</div>
      <div className="card-title">{work.title}</div>
      <div className="card-desc">{work.description}</div>
      <div className="card-arrow"><ArrowIcon /></div>
    </Link>
  )
}

export default function Home() {
  const required = works.filter(w => w.type === 'required')
  const extra = works.filter(w => w.type === 'extra')

  return (
    <>
      <div className="hero">
        <div className="hero-badge">Digital Literacy Course</div>
        <h1>My <span>e-Portfolio</span></h1>
        <p>A collection of 10 works showcasing my learning journey in digital content creation.</p>
        <div className="hero-stats">
          <div className="stat"><div className="stat-num">10</div><div className="stat-label">Total Works</div></div>
          <div className="stat"><div className="stat-num">5</div><div className="stat-label">Required</div></div>
          <div className="stat"><div className="stat-num">5</div><div className="stat-label">Additional</div></div>
        </div>
      </div>

      <div className="section-label">
        <h2>Required Works</h2>
        <span className="pill required-pill">5 entries</span>
        <div className="divider" />
      </div>
      <div className="grid">
        {required.map(w => <WorkCard key={w.id} work={w} />)}
      </div>

      <div className="section-label">
        <h2>Additional Works</h2>
        <span className="pill extra-pill">5 entries</span>
        <div className="divider" />
      </div>
      <div className="grid">
        {extra.map(w => <WorkCard key={w.id} work={w} />)}
      </div>

      <footer>e-Portfolio &nbsp;·&nbsp; Digital Literacy Course &nbsp;·&nbsp; 2026</footer>
    </>
  )
}
