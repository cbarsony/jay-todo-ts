import { createSlice, createAction } from '@reduxjs/toolkit'

const reset = createAction('reset')

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        set: (state, action) => action.payload,
    },
    /* extraReducers: {
        [reset]: (state, action) => {
            return null
        }
    }, */
})

export default userSlice
