import './index.css'

const EventItem = props => {
  const {data, changeEventStatus, check} = props

  const {id, imageUrl, name, location, registrationStatus} = data

  const changeStatus = () => {
    changeEventStatus({id, registrationStatus})
  }

  const className = check ? 'apply-class' : ''

  return (
    <li>
      <button type="button" className="event-button" onClick={changeStatus}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${className}`}
        />
        <p className="event-heading">{name}</p>
        <p className="event-description">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
