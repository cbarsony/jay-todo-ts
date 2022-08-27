import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import useToast from './useToast'

const useApi = () => {
  const toast = useToast()
  const history = useHistory()
  const api = useMemo(() => {
    const axios = Axios.create({baseURL: 'http://localhost:3001'})
    axios.defaults.withCredentials = true

    axios.interceptors.response.use(config => config, error => {
        const status = error.response?.status ?? 500
        const message = error.response?.data?.message ?? 'Something went wrong'

        if(status === 401) {
          history.push('/login')
        }
        toast.error(message)
        return Promise.reject(error)
    })

    return axios
  }, [toast, history])

  return api
}

export default useApi
