import { createSelector } from 'reselect'
import { State } from '.'
import { STATUS_FILTER } from '../components/StatusFilter'

const getTodos = (state: State) => state.todos
export const getStatusFilter = (state: State) => state.statusFilter
export const getQueryFilter = (state: State) => state.queryFilter
export const getUser = (state: State) => state.user
export const getInit = (state: State) => state.isInitialized
export const getPagination = (state: State) => state.paginagion

export const getFilteredTodos = createSelector(
    [getTodos, getStatusFilter, getQueryFilter],
    (todos, statusFilter, queryFilter) => todos.filter(todo => {
        if(statusFilter === STATUS_FILTER.ALL) {
            return true
        }

        if(todo.is_completed) {
            return statusFilter === STATUS_FILTER.COMPLETED
        }
        else {
            return statusFilter === STATUS_FILTER.PENDING
        }
    }).filter(todo => {
        return new RegExp(queryFilter, 'i').test(todo.text)
    }),
)
