import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQueryParamsString, getUser } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { useApi } from './useApi'

export const useTodoSearch = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const queryParamsString = useSelector(getQueryParamsString)

    return useCallback((saveToStore: boolean) => {
        if(!user) {
            return
        }

        return api.get(`/todos?${queryParamsString}`).then(response => {
            if (saveToStore) {
                dispatch(todosSlice.actions.loaded(response.data))
            }
            
            return response.data
        })
    }, [api, dispatch, user, queryParamsString])
  }
