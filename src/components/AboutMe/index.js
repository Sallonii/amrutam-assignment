import './index.css' // Importing CSS styles

// Importing necessary icons
import {MdAdd} from 'react-icons/md'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'

// Functional component for About Me section
const AboutMe = () => (
  <div className="about-main-container">
    {/* Header section */}
    <div className="header-container">
      <h4>A Little About me</h4>
      <button type="button" className="follow-button">
        Follow <MdAdd /> {/* Follow button with add icon */}
      </button>
    </div>
    {/* Main content section */}
    <div>
      <p className="about-para">
        Dr. Bruce Willis is a highly esteemed gynecologist with over 15 years of
        experience in women health care. Known for his compassionate approach
        and commitment to excellence
      </p>
      {/* Read More section */}
      <div className="read-more-container">
        <div className="hr-container">
          <hr /> {/* Horizontal line */}
        </div>
        <p className="read-more-text">Read More</p> {/* Read More text */}
      </div>
      {/* Language Spoken section */}
      <div className="language-container">
        <h5>Language Spoken</h5>
        <p className="language-item">Hindi</p>
        <p className="language-item">English</p>
        <p className="language-item">Telugu</p>
      </div>
      {/* Social Media Icons section */}
      <div className="social-media-container">
        <FaFacebook /> {/* Facebook icon */}
        <FaInstagram /> {/* Instagram icon */}
        <FaYoutube /> {/* Youtube icon */}
        <FaTwitter /> {/* Twitter icon */}
      </div>
    </div>
  </div>
)

export default AboutMe // Exporting AboutMe component
