import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        set: (state, action) => action.payload,
    },
    extraReducers: {
        reset: () => null
    },
})
