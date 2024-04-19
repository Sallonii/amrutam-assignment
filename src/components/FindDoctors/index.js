import {Component} from 'react'

import {MdLocationOn} from 'react-icons/md'
import {FaArrowRight} from 'react-icons/fa'

import FilterOptions from '../FilterOptions'
import FilterItem from '../FilterItem'
import DoctorsList from '../DoctorsList'

import './index.css'

class FindDoctors extends Component {
  state = {
    filterList: [{expertise: ''}, {gender: ''}, {fees: ''}, {language: ''}],
  }

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
    const {filterList} = this.state
    return (
      <>
        {this.renderLocationAndSearchContainer()}
        <ul className="filters-container">
          <FilterOptions setFilter={this.setFilter} />
        </ul>
        <hr />
        <div className="main-content-container">
          <div className="filter">
            <FilterItem filterList={filterList} />
          </div>
          <DoctorsList />
        </div>
      </>
    )
  }
}

export default FindDoctors
