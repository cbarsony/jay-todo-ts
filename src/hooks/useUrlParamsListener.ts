import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { STATUS_FILTER } from '../components/StatusFilter'
import { queryFilterSlice } from '../store/slices/queryFilterSlice'
import { statusFilterSlice } from '../store/slices/statusFilterSlice'
import { paginationSlice } from '../store/slices/paginationSlice'

export const useUrlParamsListener = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search)
        const statusFilter = urlSearchParams.get('status')
        const queryFilter = urlSearchParams.get('q')
        const skip = urlSearchParams.get('skip')
        const limit = urlSearchParams.get('limit')
        const pagination = {skip, limit}

        dispatch(statusFilterSlice.actions.changed(statusFilter ? statusFilter : STATUS_FILTER.ALL))
        dispatch(queryFilterSlice.actions.changed(queryFilter ? queryFilter : ''))
        dispatch(paginationSlice.actions.changed(pagination))
    }, [location.search, dispatch])
}
