import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { STATUS_FILTER } from '../components/StatusFilter'
import { queryFilterSlice } from '../store/slices/queryFilterSlice'
import { statusFilterSlice } from '../store/slices/statusFilterSlice'

export const useUrlParamsListener = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search)
        const statusFilter = urlSearchParams.get('status')
        const queryFilter = urlSearchParams.get('q')

        dispatch(statusFilterSlice.actions.changed(statusFilter ? statusFilter : STATUS_FILTER.ALL))
        dispatch(queryFilterSlice.actions.changed(queryFilter ? queryFilter : ''))
    }, [location.search, dispatch])
}
