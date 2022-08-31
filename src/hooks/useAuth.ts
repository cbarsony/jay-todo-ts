import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { userSlice } from '../store/slices/userSlice'
import { getUser } from '../store/selectors'

export const useAuth = () => {
    const dispatch = useDispatch()
    const api = useApi()
    const user = useSelector(getUser)
    const location = useLocation()

    useEffect(() => {
        if(user) {
            return
        }
        
        api.get('/me')
            .then(response => {
                dispatch(userSlice.actions.set(response.data))
            })
        }, [api, dispatch, user, location.pathname])

    const isReady = user !== null
    return isReady
}
