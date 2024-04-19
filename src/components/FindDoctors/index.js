import {Component} from 'react' // Importing Component from React
import {MdLocationOn} from 'react-icons/md' // Importing MdLocationOn icon from react-icons
import {FaArrowRight} from 'react-icons/fa' // Importing FaArrowRight icon from react-icons
import FilterOptions from '../FilterOptions' // Importing FilterOptions component
import FilterItem from '../FilterItem' // Importing FilterItem component
import DoctorsList from '../DoctorsList' // Importing DoctorsList component
import './index.css' // Importing CSS file for styling

class FindDoctors extends Component {
  state = {
    filterList: [{expertise: ''}, {gender: ''}, {fees: ''}, {language: ''}], // Initial state with empty filters
  }

  // Function to set filter in state
  setFilter = ({filterName, value}) => {
    this.setState(prevState => ({
      filterList: prevState.filterList.map(filter => {
        if (Object.keys(filter)[0] === filterName) {
          return {[filterName]: value}
        }
        return filter
      }),
    }))
  }

  // Function to render location and search container
  renderLocationAndSearchContainer = () => (
    <div className="location-search-bg-container">
      <h1 className="find-experts-heading">
        Find Expert Doctors For An In-Clinic Session Here
      </h1>
      <div className="location-and-input-container">
        <div className="location-element-container">
          <MdLocationOn className="location-icon" />
          <select className="location-select-element">
            <option defaultValue hidden>
              Select Location
            </option>
            <option className="location-item">Hyderabad</option>
            <option className="location-item">Moradabad</option>
            <option className="location-item">Delhi</option>
          </select>
        </div>
        <div className="search-element-container">
          <input
            placeholder="eg. Doctor, specialisation, clinic name"
            className="search-element"
          />
          <FaArrowRight />
        </div>
      </div>
    </div>
  )

  render() {
    const {filterList} = this.state // Destructuring filterList from state
    return (
      <>
        {/* Render location and search container */}
        {this.renderLocationAndSearchContainer()}
        <ul className="filters-container">
          {/* Render FilterOptions component */}
          <FilterOptions setFilter={this.setFilter} />
        </ul>
        <hr />
        <div className="main-content-container">
          <div className="filter">
            {/* Render FilterItem component with filterList */}
            <FilterItem filterList={filterList} />
          </div>
          {/* Render DoctorsList component */}
          <DoctorsList />
        </div>
      </>
    )
  }
}

export default FindDoctors
