import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryParamsGenerator } from './useQueryParamsGenerator'

export const useMyHistory = () => {
    const getQueryParams = useQueryParamsGenerator()
    const history = useHistory()

    return {
      push: useCallback(
        (route: string, delta: object) => {
            const queryParams = getQueryParams(delta)
            const urlSearchParams = new URLSearchParams()

            queryParams.q && urlSearchParams.append('q', queryParams.q)
            queryParams.status && urlSearchParams.append('status', queryParams.status)

            if(queryParams.skip) {
                urlSearchParams.append('skip', queryParams.skip)
            }
            
            if(queryParams.limit) {
                urlSearchParams.append('limit', queryParams.limit)
            }

            const urlSearchParamsString = urlSearchParams.toString()

            history.push(`${route}?${urlSearchParamsString}`)
        },
        [getQueryParams, history]
      )
    }
  }
  