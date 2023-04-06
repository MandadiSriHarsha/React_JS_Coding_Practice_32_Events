import './index.css'

const eventStatusConstants = {
  initial: 'SHOW_HEADING_ONLY',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  notRegistered: 'NOT_REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderHeadingComponent = () => (
    <p className="heading-only">
      Click on an event, to view its registration details
    </p>
  )

  const userRegisteredComponent = () => (
    <div className="user-registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const yetToRegisterComponent = () => (
    <div className="user-registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-button">
        Register Here
      </button>
    </div>
  )

  const registrationsClosedComponent = () => (
    <div className="user-registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (status) {
    case eventStatusConstants.initial:
      return renderHeadingComponent()
    case eventStatusConstants.registered:
      return userRegisteredComponent()
    case eventStatusConstants.yetToRegister:
      return yetToRegisterComponent()
    case eventStatusConstants.registrationsClosed:
      return registrationsClosedComponent()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
