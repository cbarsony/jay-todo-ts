import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getQueryFilter } from '../store/selectors'
import { StatusFilter, STATUS_FILTER } from './StatusFilter'

const TodoManager = () => {
    const [statusFilter, setStatusFilter] = useState(STATUS_FILTER.ALL)
    const queryFilter = useSelector(getQueryFilter)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClearClick = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch])

    const handleStatusFilterChange = useCallback((statusFilter: STATUS_FILTER) => {
        setStatusFilter(statusFilter)

        const queryParams = new URLSearchParams()
        queryParams.append('status', statusFilter)
        queryFilter?.length && queryParams.append('q', queryFilter)

        history.push(`/?${queryParams.toString()}`)
    }, [history, queryFilter])

    return (
        <div>
            <StatusFilter
                value={statusFilter}
                onChange={handleStatusFilterChange}
            />
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default TodoManager
