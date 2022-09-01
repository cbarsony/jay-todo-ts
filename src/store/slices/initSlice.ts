import { createSlice } from '@reduxjs/toolkit'

export const initSlice = createSlice({
    name: 'isInitialized',
    initialState: false,
    reducers: {
        setInitialized: () => true,
    },
})
