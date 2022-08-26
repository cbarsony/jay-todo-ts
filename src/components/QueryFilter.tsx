import { useDispatch } from 'react-redux'
import { useDebounce } from '../hooks/useDebounce'
import queryFilterSlice from '../slices/querySlice'

enum FILTER_STATE {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
}

function QueryFilter() {
    const dispatch = useDispatch()

    const [query, setQuery] = useDebounce('', (filterState: FILTER_STATE) => {
        dispatch(queryFilterSlice.actions.changed(filterState))
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
