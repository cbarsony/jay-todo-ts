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

export const getQueryParams = createSelector(
    [getStatusFilter, getQueryFilter, getPagination],
    (statusFilter, queryFilter, pagination) => {
        const queryParams = {
            status: statusFilter,
            q: queryFilter,
            skip: pagination.skip,
            limit: pagination.limit,
        }

        return queryParams
    }
)

export const getQueryParamsString = createSelector(
    [getStatusFilter, getQueryFilter, getPagination],
    (statusFilter, queryFilter, pagination) => {
        const urlSearchParams = new URLSearchParams()

        if(statusFilter) {
            urlSearchParams.append('status', statusFilter)
        }

        if(queryFilter && queryFilter !== '') {
            urlSearchParams.append('q', queryFilter)
        }
        
        if(pagination.skip && pagination.limit) {
            urlSearchParams.append('skip', pagination.skip)
            urlSearchParams.append('limit', pagination.limit)
        }

        return urlSearchParams.toString()
    }
)
