import {Component} from 'react'
import {FaStar} from 'react-icons/fa'
import {MdVerifiedUser} from 'react-icons/md'

import DoctorDetails from '../DoctorDetails'
import AppointmentCard from '../AppointmentCard'

import './index.css'

class DoctorProfile extends Component {
  // Render profile section
  renderProfile = () => (
    <div className="profile-container">
      <div className="profile-details-container">
        {/* Profile name and image section */}
        <div className="profile-name-image-container">
          <img
            src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1713549404/Ellipse_725_yz30ky.png"
            alt="profile"
            className="profile-image"
          />
          {/* Doctor details section */}
          <div className="doc-details-container">
            <h4 className="doctor-name">
              Dr. Bruce Willis <MdVerifiedUser /> {/* Verified user icon */}
            </h4>
            <p className="doc-type">Gynecologist</p>
            {/* Doctor rating section */}
            <div className="doc-rating-container">
              <p>4.2</p>
              <FaStar className="star-icon" /> {/* Star icon */}
            </div>
          </div>
        </div>
        {/* Followers, following, and post section */}
        <div className="follow-post-container">
          <div className="follow-item">
            <h5 className="follow-item-heading">Followers</h5>
            <p>850</p>
          </div>
          <div className="follow-item">
            <h5 className="follow-item-heading">Following</h5>
            <p>18K</p>
          </div>
          <div className="follow-item">
            <h5 className="follow-item-heading">Post</h5>
            <p>250</p>
          </div>
        </div>
        {/* Book an appointment button */}
        <button type="button" className="book-appointment-btn">
          Book an Appointment
        </button>
      </div>
    </div>
  )

  // Render details card section
  renderDetailsCard = () => (
    <div className="doctor-details-and-appointment-container">
      {/* Render DoctorDetails component */}
      <DoctorDetails />
      {/* Render AppointmentCard component */}
      <AppointmentCard />
    </div>
  )

  render() {
    return (
      <div className="main-container">
        {/* Render profile section */}
        {this.renderProfile()}
        {/* Render details card section */}
        {this.renderDetailsCard()}
      </div>
    )
  }
}

export default DoctorProfile
