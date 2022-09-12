import { useDebounce } from '../hooks/useDebounce'
import { useMyHistory } from '../hooks/useMyHistory'

const QueryFilter = () => {
    const myHistory = useMyHistory()

    const [query, setQuery] = useDebounce('', q => {
        myHistory.push('/', {q})
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
