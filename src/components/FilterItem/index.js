import {IoMdClose} from 'react-icons/io' // Importing IoMdClose icon
import './index.css' // Importing CSS file for styling

// Functional component to display filter items
const FilterItem = props => {
  const {filterList} = props

  return (
    <div className="filters-list">
      {/* Mapping over each filter item */}
      {filterList.map(eachItem => (
        <div>
          {/* Adding unique key for each item */}
          {/* Checking if the filter value is not empty */}
          {eachItem[Object.keys(eachItem)[0]] !== '' ? (
            <div className="filter-item">
              {/* Displaying filter value */}
              <p>{eachItem[Object.keys(eachItem)[0]]}</p>
              {/* Close button icon */}
              <IoMdClose className="close-btn" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default FilterItem
