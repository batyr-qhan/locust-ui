import React, { useState, useEffect, useCallback } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './app.css'

// Data
import summary from '../../data/locust.json'
// import logo from '../../logo.svg'
import { List } from 'semantic-ui-react'

// Components
import SummaryItem from '../SummaryItem/SummaryItem'
import TopMenu from '../TopMenu/TopMenu'
import Home from '../Home/Home'

function App () {

  const [locustData, setLocustData] = useState(summary.locust)
  const [locustDataCopy, setLocustDataCopy] = useState(summary.locust)
  const [completed, setCompleted] = useState([])
  const [fileExt, setFileExt] = useState('')
  const [indexSummary, setIndex] = useState(undefined)

  const handleInput = (e) => {
    const filtered = summary.locust.filter(item => {
      const result = item.file.toLowerCase().includes(e.target.value.toLowerCase()) && item.file.indexOf(fileExt) !== -1
      console.log(item.file, result)
      return result
    })
    setLocustDataCopy(filtered)
  }

  const handleFilter = (val) => {
    setFileExt(val)
    const filtered = locustData.filter(item => {
      const result = item.file.toLowerCase().split('.').pop()
      console.log(result)
      return !val || (result === val)
    })
    setLocustDataCopy(filtered)  }

  const handleRemove = (val) => {
    const temp = [...locustData]
    temp.splice(val, 1)
    setLocustData(temp)
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div className='container'>
            <TopMenu Link={Link} handleInput={handleInput} handleFilter={handleFilter} />
            <Switch>
              <Route path='/'>
                <Home handleRemove={handleRemove} data={locustDataCopy} />
              </Route>
              {/*<Route path='/users'>*/}
              {/*  <Users />*/}
              {/*</Route>*/}
              {/*<Route path='/'>*/}
              {/*  <Home />*/}
              {/*</Route>*/}
            </Switch>
          </div>
        </header>
      </div>

    </Router>
  )
}

export default App
