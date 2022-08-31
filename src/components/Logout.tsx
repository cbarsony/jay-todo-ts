import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useApi } from '../hooks/useApi'

const Logout = () => {
    const api = useApi()
    const history = useHistory()
    const dispatch = useDispatch()

    const onLogoutClick = useCallback(async() => {
        await api.get('/logout')
        history.push('/login')
        dispatch({type: 'reset'})
    }, [api, history, dispatch])

    return (
        <div>
            <button
                onClick={onLogoutClick}
            >Log out</button>
        </div>
    )
}

export default Logout
