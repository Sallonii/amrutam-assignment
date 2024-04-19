import {IoMdClose} from 'react-icons/io'
import './index.css'

const FilterItem = props => {
  const {filterList} = props

  return (
    <div className="filters-list">
      {filterList.map(eachItem => (
        <div>
          {eachItem[Object.keys(eachItem)[0]] !== '' ? (
            <div className="filter-item">
              <p>{eachItem[Object.keys(eachItem)[0]]}</p>
              <IoMdClose className="close-btn" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default FilterItem
