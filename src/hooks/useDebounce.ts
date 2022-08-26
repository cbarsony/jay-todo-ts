import { useState, useRef, MutableRefObject } from 'react'

export const useDebounce = (value: string, callback: Function, delay = 500) : [string, Function] => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    //const timeout: MutableRefObject<ReturnType<typeof setTimeout> | null> = useRef(null) HOW???
    const timeout: any = useRef(null)

    const setDebounce = (newValue: string) => {
        setDebouncedValue(newValue)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            callback(newValue)
        }, delay)
    }

    return [debouncedValue, setDebounce]
}
