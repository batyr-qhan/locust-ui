import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FilterDropdown = ({ handleFilter }) => (
  <Dropdown
    // text='Filter'
    icon='filter'
    floating
    // labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='file' content='Filter by file' />
      <Dropdown.Item
        onClick={(e) => {
          handleFilter(e.target.innerHTML)
        }}
      >js</Dropdown.Item>
      <Dropdown.Item
        onClick={(e) => {
          handleFilter(e.target.innerHTML)
        }}
      >py</Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          handleFilter('')
        }}
      >all</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default FilterDropdown
