import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SortDropdown = () => (
  <Dropdown
    // text='Sort'
    icon='sort'
    floating
    // labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Sort by ' />
      <Dropdown.Item>Important</Dropdown.Item>
      <Dropdown.Item>Announcement</Dropdown.Item>
      <Dropdown.Item>Discussion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default SortDropdown
