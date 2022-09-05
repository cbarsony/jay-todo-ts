import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useApi } from './useApi'
import { getQueryFilter, getFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { filterSlice } from '../store/slices/filterSlice'

export const useFilterListener = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const query = useSelector(getQueryFilter)
    const status = useSelector(getFilter)
  
    useEffect(() => {
      const queryParams = new URLSearchParams()
        queryParams.append('state', status)
        query.length && queryParams.append('q', query)

        api.get(`/todos?${queryParams.toString()}`)
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
            })

      // api.get('/todos', { params: getQueryParams(status, query) }).then(todos => dispatch(setTodos(todos)))
    }, [api, query, status])
}
