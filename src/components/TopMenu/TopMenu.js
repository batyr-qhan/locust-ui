import React, { useState } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import SortDropdown from '../SortDropdown/SortDropdown'

const TopMenu = () => {

  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div>
      <Menu attached='top' tabular>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='completed'
          active={activeItem === 'completed'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <SortDropdown />
          </Menu.Item>
          <Menu.Item>
            <FilterDropdown />
          </Menu.Item>
          <Menu.Item>
            <Input
              transparent
              icon={{ name: 'search', link: true }}
              placeholder='Search code...'
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )

}

export default TopMenu