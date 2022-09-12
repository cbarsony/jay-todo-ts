import { useEffect } from 'react'
import { useTodoSearch } from './useTodoSearch'

export const useFilterListener = () => {
    const todoSearch = useTodoSearch()

    useEffect(() => {
        todoSearch(true)
    }, [todoSearch])
}
