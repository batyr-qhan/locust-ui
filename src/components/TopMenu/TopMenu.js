import React, { useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import SortDropdown from '../SortDropdown/SortDropdown'

const TopMenu = ({ handleInput, handleFilter, Link }) => {

  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div>
      <Menu attached='top' tabular>
        <Link to='/'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
        </Link>
        <Link to='/completed'>
          <Menu.Item
            name='completed'
            active={activeItem === 'completed'}
            onClick={handleItemClick}
          />

        </Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SortDropdown />
          </Menu.Item>
          <Menu.Item>
            <FilterDropdown handleFilter={handleFilter} />
          </Menu.Item>
          <Menu.Item>
            <Input
              transparent
              icon={{ name: 'search', link: true }}
              placeholder='Search code...'
              onChange={handleInput}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )

}

export default TopMenu