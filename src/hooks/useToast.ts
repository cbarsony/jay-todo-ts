import { useMemo } from 'react'

const useToast = () => {
  return useMemo(() => ({
    info: (message: string) => alert(message),
    error: (message: string) => alert(message),
  }), [])
}

export default useToast
