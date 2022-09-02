import { createSelector } from 'reselect'
import { State } from '.'
import { FILTER_STATE } from './slices/filterSlice'

const getTodos = (state: State) => state.todos
export const getFilter = (state: State) => state.filter
export const getQueryFilter = (state: State) => state.queryFilter
export const getUser = (state: State) => state.user
export const getInit = (state: State) => state.isInitialized

export const getFilteredTodos = createSelector(
    [getTodos, getFilter, getQueryFilter],
    (todos, filter, queryFilter) => todos.filter(todo => {
        if(filter === FILTER_STATE.ALL) {
            return true
        }

        if(todo.is_completed) {
            return filter === FILTER_STATE.COMPLETED
        }
        else {
            return filter === FILTER_STATE.PENDING
        }
    }).filter(todo => {
        return new RegExp(queryFilter, 'i').test(todo.text)
    }),
)
