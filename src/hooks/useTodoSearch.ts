import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPagination, getQueryFilter, getStatusFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { useApi } from './useApi'

export const useTodoSearch = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const statusFilter = useSelector(getStatusFilter)
    const queryFilter = useSelector(getQueryFilter)
    const pagination = useSelector(getPagination)

    return useCallback(() => {
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

        return api.get(`/todos?${urlSearchParams.toString()}`).then(response => {
            const saveToStore = true    //TODO: implement this!

            if (saveToStore) dispatch(todosSlice.actions.loaded(response.data))
            return response.data
        })
    }, [api, dispatch, statusFilter, queryFilter, pagination])
  }
