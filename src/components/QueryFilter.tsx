import { useDispatch, useSelector } from 'react-redux'
import { useApi } from '../hooks/useApi'
import { useDebounce } from '../hooks/useDebounce'
import { queryFilterSlice } from '../store/slices/querySlice'
import { getFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'

const QueryFilter = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)

    const [query, setQuery] = useDebounce('', (filterValue) => {
        const queryParams = new URLSearchParams()
        queryParams.append('state', filter)
        filterValue.length && queryParams.append('q', filterValue)

        api.get(`/todos?${queryParams.toString()}`)
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
                dispatch(queryFilterSlice.actions.changed(filterValue))
            })
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
