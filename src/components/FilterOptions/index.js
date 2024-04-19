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
]

const FilterOptions = props => {
  const {setFilter} = props

  const onChangeFilter = (filterName, event) => {
    const {value} = event.target
    const filterDetails = {filterName, value}
    setFilter(filterDetails)
  }

  return (
    <>
      {FiltersList.map(eachItem => (
        <li className="filter-li-container" key={eachItem.id}>
          <select
            onChange={e => onChangeFilter(eachItem.name.toLowerCase(), e)}
          >
            <option defaultValue hidden>
              {eachItem.name}
            </option>
            {eachItem.values.map(eachValues => (
              <option key={eachValues}>{eachValues}</option>
            ))}
          </select>
        </li>
      ))}
      <button type="button">Clear Filters</button>
    </>
  )
}

export default FilterOptions
