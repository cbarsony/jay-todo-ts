import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useApi } from './useApi'
import { getQueryFilter, getStatusFilter, getPagination } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'

export const useFilterListener = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const statusFilter = useSelector(getStatusFilter)
    const queryFilter = useSelector(getQueryFilter)
    const pagination = useSelector(getPagination)

    useEffect(() => {
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

        api.get(`/todos?${urlSearchParams.toString()}`)
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
            })
    }, [api, dispatch, statusFilter, queryFilter, pagination])
}
