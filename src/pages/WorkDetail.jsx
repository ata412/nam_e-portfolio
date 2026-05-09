import { useParams, Navigate } from 'react-router-dom'
import { works } from '../data/works'

function Section({ icon, iconClass, title, hint, content }) {
  return (
    <div className="detail-section">
      <div className="section-header">
        <div className={`section-icon ${iconClass}`}>{icon}</div>
        <h3>{title}</h3>
        <span>{hint}</span>
      </div>
      <div className="section-body">
        {content
          ? content.split('\n').map((p, i) => <p key={i}>{p}</p>)
          : <p className="placeholder">✏️ Add your {title.toLowerCase()} here...</p>
        }
      </div>
    </div>
  )
}

export default function WorkDetail() {
  const { id } = useParams()
  const work = works.find(w => w.id === Number(id))

  if (!work) return <Navigate to="/" replace />

  const num = String(work.id).padStart(2, '0')

  return (
    <div className="detail-wrap">
      <div className="detail-header">
        <div className={`detail-badge ${work.type}`}>
          {work.type === 'required' ? 'Required' : 'Additional'} Work {num}
        </div>
        <h1>{work.title}</h1>
      </div>
      <div className="detail-sections">
        <Section
          icon="🎭" iconClass="icon-role"
          title="Your Role" hint="1–2 sentences"
          content={work.role}
        />
        <Section
          icon="⚡" iconClass="icon-challenge"
          title="One Decision or Challenge" hint="2–3 sentences"
          content={work.challenge}
        />
        <Section
          icon="💡" iconClass="icon-reflection"
          title="Reflection" hint="2–3 sentences"
          content={work.reflection}
        />
      </div>
    </div>
  )
}
