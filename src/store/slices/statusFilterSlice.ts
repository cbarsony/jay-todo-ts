import { createSlice } from '@reduxjs/toolkit'
import { STATUS_FILTER } from '../../components/StatusFilter'

export const statusFilterSlice = createSlice({
    name: 'filter',
    initialState: STATUS_FILTER.ALL,
    reducers: {
        changed: (state, action) => action.payload,
    },
})
