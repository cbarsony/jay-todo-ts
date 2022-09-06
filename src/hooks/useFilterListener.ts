import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQueryFilter, getStatusFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { useApi } from './useApi'

export const useFilterListener = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const statusFilter = useSelector(getStatusFilter)
    const queryFilter = useSelector(getQueryFilter)

    useEffect(() => {
        const urlSearchParams = new URLSearchParams()
        statusFilter && urlSearchParams.append('status', statusFilter)
        queryFilter && queryFilter !== '' && urlSearchParams.append('q', queryFilter)

        api.get(`/todos?${urlSearchParams.toString()}`)
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
            })
    }, [api, dispatch, statusFilter, queryFilter])
}
