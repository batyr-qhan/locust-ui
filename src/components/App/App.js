import React from 'react'
import { useState, useEffect } from 'react'
import './app.css'

// Data
import summary from '../../data/locust.json'
// import logo from '../../logo.svg'
import { List } from 'semantic-ui-react'

// Components
import SummaryItem from '../SummaryItem/SummaryItem'
import TopMenu from '../TopMenu/TopMenu'

function App () {

  const [locustData, setLocustData] = useState(summary.locust)
  const [inputVal, setInputVal] = useState('')
  const [fileExt, setFileExt] = useState('')

  const handleInput = (e) => {
    setInputVal(e.target.value)
  }

  const handleFilter = (val) => {
    setFileExt(val)
  }

  useEffect(() => {

    const filtered = summary.locust.filter(item => {
      return item.file.toLowerCase().includes(inputVal.toLowerCase())
    })

    setLocustData(filtered)

    if (fileExt) {
      const filteredByExt = locustData.filter(item => {
        return item.file.indexOf(fileExt) !== -1
      })
      setLocustData(filteredByExt)
    }
  }, [inputVal, fileExt])

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <TopMenu handleInput={handleInput} handleFilter={handleFilter} />
          <List divided verticalAlign='middle'>
            {locustData.map((item, i) => {
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
