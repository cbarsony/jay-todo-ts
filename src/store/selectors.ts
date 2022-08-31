import { createSelector } from 'reselect'
import { State } from '.'; 

const getTodos = (state: State) => state.todos
export const getFilter = (state: State) => state.filter
const getQueryFilter = (state: State) => state.queryFilter
export const getUser = (state: State) => state.user

export const getFilteredTodos = createSelector(
    [getTodos, getFilter, getQueryFilter],
    (todos, filter, queryFilter) => {
        /* if(todos === null) {
            return null
        } */

        return todos.filter(todo => {
            if(filter === 'ALL') {
                return true
            }
    
            if(todo.is_completed) {
                return filter === 'COMPLETED'
            }
            else {
                return filter === 'PENDING'
            }
        }).filter(todo => {
            return new RegExp(queryFilter, 'i').test(todo.text)
        })
    }
)
