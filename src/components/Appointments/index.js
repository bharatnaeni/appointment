import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', onlyStared: false}

  onClickStared = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickCreatAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStared: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onClickStaredFilter = () => {
    this.setState(prevState => ({onlyStared: !prevState.onlyStared}))
  }

  filteredApointments = () => {
    const {appointmentsList} = this.state
    return appointmentsList.filter(each => each.isStared === true)
  }

  render() {
    const {appointmentsList, title, date, onlyStared} = this.state
    const filteredList =
      onlyStared === true ? this.filteredApointments : appointmentsList
    console.log(filteredList)

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="top-container">
            <div className="top-left-container">
              <h1>Add Appointment</h1>
              <form className="form">
                <label htmlFor="title" className="lable">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="input"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <label htmlFor="date" className="lable">
                  DATE
                </label>
                <input
                  id="date"
                  type="date"
                  className="input"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickCreatAppointment}
                >
                  Add
                </button>
              </form>
            </div>
            <img
              className="main-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="bottom-container">
            <div className="appointment-heading-block">
              <h1 className="appointments-text">Appointments</h1>
              <button
                className="starred-button"
                type="button"
                onClick={this.onClickStaredFilter}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list-container">
              {filteredList.map(eachItem => (
                <AppointmentItem
                  appointmentItem={eachItem}
                  key={eachItem.id}
                  onClickStared={this.onClickStared}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
