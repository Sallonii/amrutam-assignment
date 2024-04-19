import {v4} from 'uuid' // Importing uuid for generating unique IDs
import {FaStar} from 'react-icons/fa' // Importing FaStar icon
import './index.css' // Importing CSS file for styling

// Array of doctor details
const doctorsList = [
  {
    id: v4(), // Generating unique ID for each doctor
    name: 'Dr. John Doe',
    rating: 4.5,
    expertise: 'Cardiology',
    experience: '10 years',
    language: 'English',
    videoFee: '1000',
    chatFee: '500',
    gender: 'Male',
  },
  {
    id: v4(),
    name: 'Dr. Jane Smith',
    rating: 4.8,
    expertise: 'Neurology',
    experience: '8 years',
    language: 'Hindi',
    videoFee: '1200',
    chatFee: '600',
    gender: 'Female',
  },
  {
    id: v4(),
    name: 'Dr. David Johnson',
    rating: 4.3,
    expertise: 'Orthopedics',
    experience: '12 years',
    language: 'English',
    videoFee: '1500',
    chatFee: '700',
    gender: 'Male',
  },
]

// Component to display list of doctors
const DoctorsList = () => (
  <div className="doctor-details-card-container">
    {/* Mapping over each doctor card */}
    {doctorsList.map(eachCard => (
      <div className="card-container" key={eachCard.id}>
        {' '}
        {/* Assigning unique key to each card */}
        <div className="profile-container">
          <img
            className="profile-image"
            src="https://amrutam.netlify.app/assets/drgirl-DmPgbVcR.png"
            alt="profile"
          />
          <div className="rating-container">
            {/* Displaying rating with FaStar icon */}
            <p>
              {eachCard.rating} <FaStar />
            </p>
          </div>
        </div>
        <div className="details-container">
          {/* Displaying doctor details */}
          <h2>{eachCard.name}</h2>
          <p>{eachCard.expertise}</p>
          <p>{eachCard.experience} experience</p>
          <p>Speaks: English, Spanish, French</p>
        </div>
        <div className="fees-container">
          {/* Displaying consultation fees */}
          <div className="fee-card">
            <h3>Video Consultation</h3>
            <p>${eachCard.videoFee}</p>
          </div>
          <div className="fee-card">
            <h3>Chat Consultation</h3>
            <p>${eachCard.chatFee}</p>
          </div>
        </div>
        {/* Buttons for view profile and book consultation */}
        <button type="button" className="view-profile-button button">
          View Profile
        </button>
        <button type="button" className="book-consultation-button button">
          Book a Consultation
        </button>
      </div>
    ))}
  </div>
)

export default DoctorsList
