import { createSlice } from '@reduxjs/toolkit'

export enum FILTER_STATE {
    ALL,
    COMPLETED,
    PENDING,
}

export enum FILTER_ACTION {
    COMPLETED_ON,
    COMPLETED_OFF,
    PENDING_ON,
    PENDING_OFF,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: FILTER_STATE.ALL,
    reducers: {
        changed: (state, action) => {
            switch(state) {
    
                case FILTER_STATE.ALL:
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return FILTER_STATE.PENDING
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_OFF) {
                        return FILTER_STATE.COMPLETED
                    }
                    else {
                        return state
                    }
        
                case FILTER_STATE.COMPLETED:
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return FILTER_STATE.PENDING
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_ON) {
                        return FILTER_STATE.ALL
                    }
                    else {
                        return state
                    }
        
                case FILTER_STATE.PENDING:
                    if(action.payload === FILTER_ACTION.COMPLETED_ON) {
                        return FILTER_STATE.ALL
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_OFF) {
                        return FILTER_STATE.COMPLETED
                    }
                    else {
                        return state
                    }
        
                default:
                    return state
            }
        },
    },
})
