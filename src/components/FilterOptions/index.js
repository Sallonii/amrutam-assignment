import {v4} from 'uuid'

import './index.css'

const FiltersList = [
  {
    id: v4(),
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

const FilterOptions = props => {
  const {setFilter} = props

  const onChangeFilter = (filterName, event) => {
    const {value} = event.target
    const filterDetails = {filterName, value}
    setFilter(filterDetails)
  }

  return (
    <div className="filter-main-container">
      {FiltersList.map(eachItem => (
        <div className="filter-item" key={eachItem.id}>
          <select
            className={`filter-select ${eachItem.name}`}
            onChange={e => onChangeFilter(eachItem.name.toLowerCase(), e)}
          >
            <option defaultValue hidden>
              {eachItem.name}
            </option>
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
