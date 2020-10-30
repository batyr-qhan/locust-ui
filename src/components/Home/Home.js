import { List } from 'semantic-ui-react'

import SummaryItem from '../SummaryItem/SummaryItem'

const Home = ({ data, handleRemove }) => {
  return (
    <List divided verticalAlign='middle'>
      {data.map((item, i) => {
        return (
          <SummaryItem handleRemove={handleRemove} item={item} index={i} key={item.file_url} />
        )
      })}
    </List>
  )
}

export default Home