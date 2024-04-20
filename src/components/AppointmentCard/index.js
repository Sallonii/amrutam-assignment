import './index.css' // Importing CSS styles

// Importing necessary icons
import {FaCalendarDay} from 'react-icons/fa'
import {MdVerifiedUser} from 'react-icons/md'

// Functional component for Appointment Card
const AppointmentCard = () => (
  <div className="appointment-main-container">
    {/* Appointment Fee section */}
    <div className="appointment-fee">
      <h4>Appointment Fee</h4>
      <p className="fee-text">$60.00</p>
    </div>
    {/* Mode of Session selection section */}
    <div className="appointment-container">
      <p className="appointment-text">Select your mode of session</p>
      <div className="hr-container">
        <hr /> {/* Horizontal line */}
      </div>
    </div>
    {/* Time Slot selection section */}
    <div className="time-slot-container">
      {/* Time Slot items */}
      <div className="time-slot-item">
        <p className="text">In-Clinic</p>
        <p>45min</p>
      </div>
      <div className="time-slot-item selected">
        <p className="selected-text text">
          Video <MdVerifiedUser /> {/* Video icon with verified user */}
        </p>
        <p>45min</p>
      </div>
      <div className="time-slot-item">
        <p className="text">Chat</p>
        <p>10min</p>
      </div>
    </div>
    {/* Time Slot selection container */}
    <div className="appointment-container">
      <p className="appointment-text">Pick a time slot</p>
      <div className="hr-container">
        <hr /> {/* Horizontal line */}
      </div>
      <FaCalendarDay /> {/* Calendar icon */}
    </div>
    {/* Time slots */}
    <h1 className="time-heading">Morning</h1>
    <div className="time-container">
      <p className="time-slot">09:00 AM</p>
      <p className="time-slot">09:30 AM</p>
      <p className="time-slot">10:00 AM</p>
      <p className="time-slot">10:30 AM</p>
      <p className="time-slot">11:00 AM</p>
      <p className="time-slot">11:30 AM</p>
    </div>
    <h1 className="time-heading">Evening</h1>
    <div className="time-container">
      <p className="time-slot">03:00 PM</p>
      <p className="time-slot">04:30 PM</p>
      <p className="time-slot">06:00 PM</p>
      <p className="time-slot">08:30 PM</p>
      <p className="time-slot">09:00 PM</p>
      <p className="time-slot">10:30 PM</p>
    </div>
    {/* Book Appointment button */}
    <button type="button" className="appointment-btn">
      Book an Appointment
    </button>
  </div>
)

export default AppointmentCard // Exporting AppointmentCard component
