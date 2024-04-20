import './index.css' // Importing CSS styles

// Importing necessary icon
import {FaBuilding} from 'react-icons/fa'

// Functional component for WorkExperience section
const WorkExperience = () => (
  <div className="work-main-container">
    {/* WorkExperience header section */}
    <div className="work-header-container">
      <h4 className="header-text">My Work Experience</h4>
    </div>
    {/* Work container */}
    <div className="work-container">
      {/* Work experience heading */}
      <h4 className="work-heading">
        I HAVE BEEN IN PRACTICE FOR MORE THAN 7+ YEARS
      </h4>
      <hr /> {/* Horizontal line */}
      {/* Work places main container */}
      <div className="work-places-main-container">
        <FaBuilding className="building-icon" /> {/* Building icon */}
        <div>
          {/* Work place details container */}
          <div className="work-places-container">
            <h6>Midtown Medical Clinic</h6>
            <p className="timeline">2016-PRESENT</p>
          </div>
          <p className="role">Senior Doctor</p> {/* Role */}
        </div>
      </div>
      {/* Second work place main container */}
      <div className="work-places-main-container">
        <FaBuilding className="building-icon" /> {/* Building icon */}
        <div>
          {/* Second work place details container */}
          <div className="work-places-container">
            <h6>Midtown Medical Clinic</h6>
            <p className="timeline">2010-2015</p>
          </div>
          <p className="role">Senior Doctor</p> {/* Role */}
        </div>
      </div>
    </div>
  </div>
)

export default WorkExperience // Exporting WorkExperience component
