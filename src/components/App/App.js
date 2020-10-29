import logo from '../../logo.svg'
import './app.css'
import summary from '../../data/locust.json'
import { Button, Image, List, Label, Icon, Accordion, Progress, Menu, Input, Segment } from 'semantic-ui-react'
import { Collapse } from 'react-collapse/lib/Collapse'
import { useState } from 'react'

// Components
import React from 'react'
import SummaryItem from '../SummaryItem/SummaryItem'
import TopMenu from '../TopMenu/TopMenu'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <TopMenu />
          <List divided verticalAlign='middle'>
            {summary.locust.map((item, i) => {
              return (
                <SummaryItem item={item} index={i} key={i} />
              )
            })}
          </List>
        </div>
      </header>
    </div>
  )
}

export default App
