import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="header-main-container">
      <div className="header-container">
        <div className="heading-link-container">
          <Link to="/" className="nav-link amrutam-heading">
            AMRUTAM
          </Link>
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
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/find-doctors" className="nav-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </Link>
        </li>
        <li className="nav-menu-item-mobile">
          <Link to="/about" className="nav-link">
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
