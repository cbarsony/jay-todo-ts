import { createSlice } from '@reduxjs/toolkit'

export enum FILTER_STATE {
    ALL = 'all',
    COMPLETED = 'completed',
    PENDING = 'pending',
}

export enum FILTER_ACTION {
    COMPLETED_ON,
    COMPLETED_OFF,
    PENDING_ON,
    PENDING_OFF,
}

export function getNextFilterState(state: FILTER_STATE, action: FILTER_ACTION) {
    switch(state) {
    
        case FILTER_STATE.ALL:
            if(action === FILTER_ACTION.COMPLETED_OFF) {
                return FILTER_STATE.PENDING
            }
            else if(action === FILTER_ACTION.PENDING_OFF) {
                return FILTER_STATE.COMPLETED
            }
            else {
                return state
            }

        case FILTER_STATE.COMPLETED:
            if(action === FILTER_ACTION.COMPLETED_OFF) {
                return FILTER_STATE.PENDING
            }
            else if(action === FILTER_ACTION.PENDING_ON) {
                return FILTER_STATE.ALL
            }
            else {
                return state
            }

        case FILTER_STATE.PENDING:
            if(action === FILTER_ACTION.COMPLETED_ON) {
                return FILTER_STATE.ALL
            }
            else if(action === FILTER_ACTION.PENDING_OFF) {
                return FILTER_STATE.COMPLETED
            }
            else {
                return state
            }

        default:
            return state
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: FILTER_STATE.ALL,
    reducers: {
        changed: (state, action) => {
            const nextState = getNextFilterState(state, action.payload)
            return nextState
        },
        set: (state, action) => {
            return action.payload
        },
    },
})
