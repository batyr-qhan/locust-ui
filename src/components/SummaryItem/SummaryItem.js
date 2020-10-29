import { List, Button, Label, Icon, Progress } from 'semantic-ui-react'
import { Collapse } from 'react-collapse/lib/Collapse'
import React, { useState, useEffect } from 'react'

import ChangesItem from '../ChangesItem/ChangesItem'

function SummaryItem ({ item }) {

  const [isOpened, setIsOpened] = useState(false)
  const [percent, setPercent] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)
  const [fileName, setFileName] = useState('')

  const handleCollapseClick = () => {
    setIsOpened(!isOpened)
  }

  const handleChildrenCount = (value) => {
    setChildrenCount(childrenCount => childrenCount + value)
  }

  const increment = () => {
    setPercent(percent => percent >= 100 ? 0 : percent + (100 / childrenCount))
    console.log('dlfkjsldkjf')
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
          <Button onClick={handleCollapseClick}>{isOpened ? 'hide' : 'expand'}</Button>
        </List.Content> : null}

      <List.Icon name='file' />
      <List.Content>{fileName}</List.Content>
      <Label>
        Changes
        <Label.Detail>{item.changes.length}</Label.Detail>
      </Label>
      <Collapse isOpened={isOpened}>
        <List>
          {item.changes.map((item, index) => {
            return <ChangesItem increment={increment} childrenCount={handleChildrenCount} item={item} key={index} />
          })}
        </List>
      </Collapse>
    </List.Item>
  )
}

export default SummaryItem