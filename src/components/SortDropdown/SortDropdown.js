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
      <Dropdown.Header icon='sort amount down' content='Sort by changes' />
      <Dropdown.Item>Least</Dropdown.Item>
      {/*<Dropdown.Item>Announcement</Dropdown.Item>*/}
      {/*<Dropdown.Item>Discussion</Dropdown.Item>*/}
    </Dropdown.Menu>
  </Dropdown>
)

export default SortDropdown
