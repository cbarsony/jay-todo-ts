import { createSlice } from '@reduxjs/toolkit'

type Pagination = {
    skip: string | null,
    limit: string | null,
}

const urlParams = new URLSearchParams(window.location.search)
const skip = urlParams.get('skip')
const limit = urlParams.get('limit')

const initialState: Pagination = {
    skip,
    limit,
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        changed: (state, action) => {
            return action.payload
        },
    },
})
