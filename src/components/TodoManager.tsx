import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { FILTER_ACTION, FILTER_STATE, getNextFilterState } from '../store/slices/filterSlice'
import { getFilter, getQueryFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { filterSlice } from '../store/slices/filterSlice'

const TodoManager = () => {
    const [inputValueCompleted, setInputValueCompleted] = useState(true)
    const [inputValuePending, setInputValuePending] = useState(true)

    const history = useHistory()
    const filter = useSelector(getFilter)
    const queryFilter = useSelector(getQueryFilter)
    const dispatch = useDispatch()
    // const api = useApi()

    const handleClearClick1 = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch])

    const handleClearClick2 = useCallback(() => dispatch({ type: 'todos/cleared' }), [dispatch])

    const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const filterInput = e.currentTarget.dataset.checkbox_filter
        //TODO: without let!
        let filterAction: FILTER_ACTION

        if(filterInput === FILTER_STATE.COMPLETED) {
            filterAction = e.target.checked ? FILTER_ACTION.COMPLETED_ON : FILTER_ACTION.COMPLETED_OFF
        }
        else {
            filterAction = e.target.checked ? FILTER_ACTION.PENDING_ON : FILTER_ACTION.PENDING_OFF
        }

        const nextFilterState = getNextFilterState(filter, filterAction)

        setInputValueCompleted(nextFilterState === FILTER_STATE.ALL || nextFilterState === FILTER_STATE.COMPLETED)
        setInputValuePending(nextFilterState === FILTER_STATE.ALL || nextFilterState === FILTER_STATE.PENDING)

        history.push(`/?q=${queryFilter}&filter=${nextFilterState}`)
    }, [filter, queryFilter, history])

    /* const onFilterChange = useCallback((filterAcion: FILTER_ACTION) => {
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
    }, [filter, queryFilter, api, dispatch]) */

    return (
        <div>
            <div>
                <input
                    id="checkbox-completed"
                    type="checkbox"
                    data-checkbox_filter={FILTER_STATE.COMPLETED}
                    checked={inputValueCompleted}
                    onChange={handleFilterChange}
                    // onChange={e => onFilterChange(e.target.checked ? FILTER_ACTION.COMPLETED_ON : FILTER_ACTION.COMPLETED_OFF)}
                />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input
                    id="checkbox-pending"
                    type="checkbox"
                    data-checkbox_filter={FILTER_STATE.PENDING}
                    checked={inputValuePending}
                    onChange={handleFilterChange}
                    // onChange={e => onFilterChange(e.target.checked ? FILTER_ACTION.PENDING_ON : FILTER_ACTION.PENDING_OFF)}
                />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default TodoManager
