import { useMemo } from 'react'

export const useToast = () => {
  return useMemo(() => ({
    info: (message: string) => alert(message),
    error: (message: string) => alert(message),
  }), [])
}
