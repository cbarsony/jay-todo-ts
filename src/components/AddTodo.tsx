import { Http2ServerResponse } from 'http2'
import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useApi from '../hooks/useApi'
import todosSlice from '../store/todosSlice'

function AddTodo() {
    const [todoText, setTodoText] = useState('')
    const api = useApi()
    const dispatch = useDispatch()

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }, [])

    const handleAddTodo = useCallback(() => {
        api.post('/todos', {text: todoText})
            .then(response => {
                dispatch(todosSlice.actions.loaded(response.data))
            })

        setTodoText('')
    }, [api, dispatch, todoText])

    return (
        <div>
            <input
                value={todoText}
                onChange={onInputChange}
                type="text"
                placeholder="Add new todo..."
            />
            <button
                onClick={handleAddTodo}
            >+</button>
        </div>
    )
}

export default AddTodo
