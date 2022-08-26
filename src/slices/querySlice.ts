import { createSlice } from '@reduxjs/toolkit'

const queryFilterSlice = createSlice({
    name: 'queryFilter',
    initialState: '',
    reducers: {
        changed: (state, action) => action.payload,
    },
})

export default queryFilterSlice
