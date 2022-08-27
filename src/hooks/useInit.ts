import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useApi from '../hooks/useApi'
import todosSlice from '../store/todosSlice'
import { getFilteredTodos } from '../store/selectors'

const useInit = () => {
    const dispatch = useDispatch()
    const api = useApi()
    const todos = useSelector(getFilteredTodos)
    const location = useLocation()

    useEffect(() => {
        if(todos.length) {
            return
        }

        api.get('/todos')
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
            })
    }, [api, dispatch, todos, location.pathname])

    const isReady = todos !== null
    return isReady
}

export default useInit
