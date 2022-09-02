import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useApi } from '../hooks/useApi'
import { FILTER_ACTION, FILTER_STATE, getNextFilterState } from '../store/slices/filterSlice'
import { getFilter, getQueryFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { filterSlice } from '../store/slices/filterSlice'

const TodoManager = () => {
    const [inputValueCompleted, setInputValueCompleted] = useState(true)
    const [inputValuePending, setInputValuePending] = useState(true)

    const filter = useSelector(getFilter)
    const queryFilter = useSelector(getQueryFilter)
    const dispatch = useDispatch()
    const api = useApi()

    const handleClearClick = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch])

    const onFilterChange = useCallback((filterAcion: FILTER_ACTION) => {
        const nextFilterState = getNextFilterState(filter, filterAcion)

        setInputValueCompleted(nextFilterState === FILTER_STATE.ALL || nextFilterState === FILTER_STATE.COMPLETED)
        setInputValuePending(nextFilterState === FILTER_STATE.ALL || nextFilterState === FILTER_STATE.PENDING)

        const queryParams = new URLSearchParams()
        queryParams.append('state', nextFilterState)
        queryFilter.length && queryParams.append('q', queryFilter)

        api.get(`/todos?${queryParams.toString()}`)
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
                dispatch(filterSlice.actions.changed(filterAcion))
            })
    }, [filter, queryFilter, api, dispatch])

    return (
        <div>
            <div>
                <input
                    id="checkbox-completed"
                    type="checkbox"
                    checked={inputValueCompleted}
                    onChange={e => onFilterChange(e.target.checked ? FILTER_ACTION.COMPLETED_ON : FILTER_ACTION.COMPLETED_OFF)}
                />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input
                    id="checkbox-pending"
                    type="checkbox"
                    checked={inputValuePending}
                    onChange={e => onFilterChange(e.target.checked ? FILTER_ACTION.PENDING_ON : FILTER_ACTION.PENDING_OFF)}
                />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default TodoManager
