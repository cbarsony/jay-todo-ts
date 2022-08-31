import { useDispatch } from 'react-redux'
import { useDebounce } from '../hooks/useDebounce'
import { queryFilterSlice } from '../store/slices/querySlice'

const QueryFilter = () => {
    const dispatch = useDispatch()

    const [query, setQuery] = useDebounce('', (filterValue) => {
        dispatch(queryFilterSlice.actions.changed(filterValue))
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
