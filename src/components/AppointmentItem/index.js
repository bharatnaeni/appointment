import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentItem, onClickStared} = props
  const {title, date, isStared, id} = appointmentItem

  const onClickStaredButton = () => {
    onClickStared(id)
  }

  return (
    <li className="list-item-container">
      <div className="card-heading-block">
        <p className="task">{title}</p>
        <button
          className="star-button"
          data-testid="star"
          type="button"
          onClick={onClickStaredButton}
        >
          <img
            className="star-image"
            src={
              isStared
                ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
            }
            alt="star"
          />
        </button>
      </div>
      <p className="display-date">
        Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
