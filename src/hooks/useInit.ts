import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { todosSlice } from '../store/slices/todosSlice'
import { initSlice } from '../store/slices/initSlice'
import { getInit } from '../store/selectors'

export const useInit = () => {
    const dispatch = useDispatch()
    const api = useApi()
    const isInitialized = useSelector(getInit)
    const location = useLocation()

    useEffect(() => {
        if(isInitialized) {
            return
        }

        api.get('/todos')
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
                dispatch(initSlice.actions.setInitialized())
            })
    }, [isInitialized, api, dispatch, location.pathname])

    return isInitialized
}
