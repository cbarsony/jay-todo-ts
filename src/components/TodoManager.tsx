import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterSlice } from '../store/slices/filterSlice'
import { FILTER_ACTION, FILTER_STATE } from '../store/slices/filterSlice'
import { getFilter } from '../store/selectors'

const TodoManager = () => {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const is_completedChecked = filter === FILTER_STATE.ALL || filter === FILTER_STATE.COMPLETED
    const isPendingChecked = filter === FILTER_STATE.ALL || filter === FILTER_STATE.PENDING

    const handleCompletedChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterSlice.actions.changed(e.target.checked ? FILTER_ACTION.COMPLETED_ON : FILTER_ACTION.COMPLETED_OFF))
    }, [dispatch])

    const handlePendingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterSlice.actions.changed(e.target.checked ? FILTER_ACTION.PENDING_ON : FILTER_ACTION.PENDING_OFF))
    }, [dispatch])

    const handleClearClick = useCallback(() => {
        dispatch({ type: 'todos/cleared' })
    }, [dispatch])

    return (
        <div>
            <div>
                <input
                    id="checkbox-completed"
                    type="checkbox"
                    checked={is_completedChecked}
                    onChange={handleCompletedChange}
                />
                <label htmlFor="checkbox-completed">Completed</label>
            </div>
            <div>
                <input
                    id="checkbox-pending"
                    type="checkbox"
                    checked={isPendingChecked}
                    onChange={handlePendingChange}
                />
                <label htmlFor="checkbox-pending">Pending</label>
            </div>
            <button onClick={handleClearClick}>Clear</button>
        </div>
    )
}

export default TodoManager
