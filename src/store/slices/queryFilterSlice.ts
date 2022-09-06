import { createSlice } from '@reduxjs/toolkit'

export const queryFilterSlice = createSlice({
    name: 'queryFilter',
    initialState: '',
    reducers: {
        changed: (state, action) => action.payload,
    },
})
