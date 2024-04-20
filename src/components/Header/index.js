import {Link} from 'react-router-dom' // Importing Link component from react-router-dom
import './index.css' // Importing CSS file for styling

// Functional component for header
const Header = () => (
  <>
    {/* Main header container */}
    <div className="header-main-container">
      <div className="nav-header-container">
        {/* Heading and navigation links */}
        <div className="heading-link-container">
          {/* Link to home */}
          <Link to="/" className="nav-link amrutam-heading">
            AMRUTAM
          </Link>
          {/* Navigation links */}
          <ul className="header-link">
            <li className="header-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="header-item">
              <Link to="/find-doctors" className="nav-link">
                Find Doctors
              </Link>
            </li>
            <li className="header-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Buttons for login and signup */}
        <div className="button-container">
          <button type="button" className="login-btn btn">
            Login
          </button>
          <button type="button" className="signup-btn btn">
            Sign-up
          </button>
        </div>
      </div>
    </div>
    {/* Mobile navigation menu */}
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        {/* Navigation menu items */}
        <li className="nav-menu-item-mobile">
          {/* Link to home */}
          <Link to="/" className="nav-link">
            {/* Home icon */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>
        <li className="nav-menu-item-mobile">
          {/* Link to find doctors */}
          <Link to="/find-doctors" className="nav-link">
            {/* Products icon */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </Link>
        </li>
        <li className="nav-menu-item-mobile">
          {/* Link to about */}
          <Link to="/about" className="nav-link">
            {/* Cart icon */}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </Link>
        </li>
      </ul>
    </div>
  </>
)

export default Header
