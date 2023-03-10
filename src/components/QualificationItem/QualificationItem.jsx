import './QualificationItem.scss'

const QualificationItem = ({ year, title, description, className }) => {
  return (
    <div className="qualification__item">
      <div className="qualification__year">
        <p className={className}>{year}</p>
      </div>

      <div className="qualification__name">
        <p className="qualification__name-title">{title}</p>
        <p className="qualification__name-description">{description}</p>
      </div>
    </div>
  )
}

export default QualificationItem
