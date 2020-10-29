import { List, Button, Label, Icon } from 'semantic-ui-react'
import { Collapse } from 'react-collapse/lib/Collapse'
import React, { useState, useEffect } from 'react'

function ChangesItem ({ item, childrenCount, increment, handleStats }) {

  const [isOpened, setIsOpened] = useState(false)

  const handleClick = () => {
    setIsOpened(!isOpened)
  }

  useEffect(() => {
    item.children.length && handleStats(item.changed_lines)
    item.children.forEach(item => {
      if (!item.children.length) {
        childrenCount(1)
      }
    })
  }, [])

  return (
    <List.Item>
      <List.Content floated='right'>
        <Button><a href={item.link}><Icon name='eye' /></a></Button>
      </List.Content>
      {item.children.length ?
        <List.Content floated='right'>
          <Icon name={!isOpened ? 'angle right' : 'angle down'} onClick={handleClick} />
        </List.Content> : null}
      {item.children.length ?
        null : <List.Content floated='right'>
          <Button onClick={increment} color='green'>Mark as reviewed</Button>
        </List.Content>}

      <List.Content>{item.name}</List.Content>
      <Label color='green'>
        {item.type}
      </Label>
      <Label>
        changed lines
        <Label.Detail>{item.changed_lines}</Label.Detail>
      </Label>
      <Label>
        total lines
        <Label.Detail>{item.total_lines}</Label.Detail>
      </Label>
      <Collapse isOpened={isOpened}>
        <List>
          {item.children.map((item, i) => {
            return <ChangesItem
              handleStats={handleStats}
              increment={increment}
              childrenCount={childrenCount}
              item={item}
              key={i}
            />
          })}
        </List>
      </Collapse>
    </List.Item>
  )
}

export default ChangesItem