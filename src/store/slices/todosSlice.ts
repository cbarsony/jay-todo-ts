import { createSlice } from '@reduxjs/toolkit'
import { Todo } from '..'

const initialState: Todo[] = []

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loaded: (state, action) => {
            return action.payload
        },
        updated: (state, action) => {
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
        },
        cleared: () => {
            return []
        },
    },
    /* extraReducers: {
        'reset': (state, action) => {
            return null
        }
    }, */
})
