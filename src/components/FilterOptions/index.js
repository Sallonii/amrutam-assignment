import {v4} from 'uuid' // Importing v4 function from uuid library
import './index.css' // Importing CSS file for styling

// Array containing filter options
const FiltersList = [
  {
    id: v4(), // Generating unique ID for filter option
    name: 'Expertise',
    values: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'],
  },
  {
    id: v4(),
    name: 'Gender',
    values: ['Male', 'Female', 'Other', 'Prefer not to say'],
  },
  {
    id: v4(),
    name: 'Fees',
    values: ['$0 - $50', '$51 - $100', '$101 - $200', 'Above $200'],
  },
  {
    id: v4(),
    name: 'Language',
    values: ['English', 'Spanish', 'French', 'Mandarin'],
  },
  {
    id: v4(),
    name: 'ALL filters',
    values: ['All', 'others'],
  },
]

// Component for displaying filter options
const FilterOptions = props => {
  const {setFilter} = props

  // Function to handle filter change
  const onChangeFilter = (filterName, event) => {
    const {value} = event.target
    const filterDetails = {filterName, value}
    setFilter(filterDetails)
  }

  return (
    <div className="filter-main-container">
      {/* Mapping over each filter option */}
      {FiltersList.map(eachItem => (
        <div className="filter-item" key={eachItem.id}>
          {/* Select element for each filter option */}
          <select
            className={`filter-select ${eachItem.name}`}
            onChange={e => onChangeFilter(eachItem.name.toLowerCase(), e)} // Calling onChangeFilter function on select change
          >
            <option defaultValue hidden>
              {eachItem.name}
            </option>
            {/* Mapping over values of each filter option */}
            {eachItem.values.map(eachValue => (
              <option key={eachValue}>{eachValue}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}

export default FilterOptions
