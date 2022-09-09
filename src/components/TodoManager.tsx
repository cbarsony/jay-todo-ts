import { useState, useCallback } from 'react'
import { useMyHistory } from '../hooks/useMyHistory'
import { StatusFilter, STATUS_FILTER } from './StatusFilter'

const TodoManager = () => {
    const [statusFilter, setStatusFilter] = useState(STATUS_FILTER.ALL)
    const myHistory = useMyHistory()

    const handleClearClick = () => {}
    /* const handleClearClick = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch]) */

    const handleStatusFilterChange = useCallback((status: STATUS_FILTER) => {
        setStatusFilter(status)
        myHistory.push('/', {status})
    }, [myHistory])

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
