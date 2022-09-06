import { useSelector } from 'react-redux'
import { useDebounce } from '../hooks/useDebounce'
import { getStatusFilter } from '../store/selectors'
import { useHistory } from 'react-router-dom'

const QueryFilter = () => {
    const history = useHistory()
    const filter = useSelector(getStatusFilter)

    const [query, setQuery] = useDebounce('', (filterValue) => {
        const queryParams = new URLSearchParams()
        queryParams.append('status', filter)
        filterValue.length && queryParams.append('q', filterValue)

        history.push(`/?${queryParams.toString()}`)
    })
  
    return (
        <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Filter todos..."
        />
    )
}

export default QueryFilter
