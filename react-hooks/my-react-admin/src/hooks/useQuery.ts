import Qs from 'query-string'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  const location = useLocation()
  return Qs.parse(location.search)
}

export default useQuery
