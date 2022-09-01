//import { createSlice, createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

//const reset = createAction('reset')

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        set: (state, action) => action.payload,
    },
    extraReducers: {
        reset: (state, action) => {
            return null
        }
    },
})
