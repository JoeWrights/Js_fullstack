import { FC } from "react";
import { useParams } from "react-router-dom";
import useQuery from '@/hooks/useQuery'
import './demo.css'

const Index: FC = () => {
  const params = useParams()
  const query = useQuery()
  const queryArr = Object.keys(query).map(q => ({value: query[q], key: q}))
  console.log(useParams(), query)
  return (
    <div className="user">
      <div style={{ padding: '10px', fontSize: '18px' }}>User</div>
      <div>params: { params.id && params.id }</div>
      <div>
      query:
      { queryArr.length && queryArr.map(item => {
        return <li key={item.key}>{item.key}: {item.value}</li>
      }) }
      </div>
    </div>
  )
}

export default Index
