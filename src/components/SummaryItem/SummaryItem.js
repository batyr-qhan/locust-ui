import { List, Button, Label, Icon, Progress } from 'semantic-ui-react'
import { Collapse } from 'react-collapse/lib/Collapse'
import React, { useState, useEffect } from 'react'

import ChangesItem from '../ChangesItem/ChangesItem'

function SummaryItem ({ item }) {

  const [isOpened, setIsOpened] = useState(false)
  const [percent, setPercent] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)
  const [fileName, setFileName] = useState('')
  const [totalChanges, setTotalChanges] = useState(0)

  const handleCollapseClick = () => {
    setIsOpened(!isOpened)
  }

  const handleChildrenCount = (value) => {
    setChildrenCount(childrenCount => childrenCount + value)
  }

  const increment = () => {
    setPercent(percent => percent >= 100 ? 0 : percent + (100 / childrenCount))
  }

  const handleStats = (value) => {
    setTotalChanges(totalChanges => totalChanges + value)
  }

  useEffect(() => {
    const substringTest = function (filePath) {
      return filePath.substring(filePath.lastIndexOf('/') + 1)
    }
    const newName = substringTest(item.file)
    setFileName(newName)
  })

  return (
    <List.Item className='app__item'>
      <Progress percent={percent} indicating />
      <List.Content floated='right'>
        <Button><a href={item.link}><Icon name='eye' /></a></Button>
      </List.Content>
      {item.changes.length ?
        <List.Content floated='right'>
          <Icon name={!isOpened ? 'angle right' : 'angle down'}  onClick={handleCollapseClick} />
        </List.Content> : null}

      <List.Icon name='file' />
      <List.Content>{fileName}</List.Content>
      <Label>
        Changes
        <Label.Detail>{item.changes.length}</Label.Detail>
      </Label>
      <Label>
        Total lines changed
        <Label.Detail>{totalChanges}</Label.Detail>
      </Label>
      <Collapse isOpened={isOpened}>
        <List>
          {item.changes.map((item, index) => {
            return <ChangesItem
              handleStats={handleStats}
              increment={increment}
              childrenCount={handleChildrenCount}
              item={item}
              key={index}
            />
          })}
        </List>
      </Collapse>
    </List.Item>
  )
}

export default SummaryItem