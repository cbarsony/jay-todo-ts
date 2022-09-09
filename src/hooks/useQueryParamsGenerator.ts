import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getQueryParams } from '../store/selectors'

export const useQueryParamsGenerator = () => {
  const queryParams = useSelector(getQueryParams)

  return useCallback(
    (delta: object) => {
      return { ...queryParams, ...delta }
    },
    [queryParams]
  )
}
