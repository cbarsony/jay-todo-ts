import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useApi } from './useApi'
import { getQueryFilter, getFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { filterSlice } from '../store/slices/filterSlice'
import { queryFilterSlice } from '../store/slices/querySlice'

export const useQuery = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const urlParams = new URLSearchParams(location.search)
    const q = urlParams.get('q')
    const filter = urlParams.get('filter')
    
    useEffect(() => {
        if(!q && !filter) {
            return
        }

        dispatch(queryFilterSlice.actions.changed(q))
        dispatch(filterSlice.actions.set(filter))
    }, [q, filter])
}
