import { useState, useRef } from 'react'

export const useDebounce = <T>(value: T, callback: (value: T) => any, delay = 500) : [T, (value: T) => void] => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    const timeout: any = useRef<NodeJS.Timeout | null>(null)

    const setDebounce = (newValue: T) => {
        setDebouncedValue(newValue)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            callback(newValue)
        }, delay)
    }

    return [debouncedValue, setDebounce]
}
