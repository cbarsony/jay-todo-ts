import { createSlice } from '@reduxjs/toolkit'

export enum FILTER_STATE {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
}

export enum FILTER_ACTION {
    COMPLETED_ON = 'COMPLETED_ON',
    COMPLETED_OFF = 'COMPLETED_OFF',
    PENDING_ON = 'PENDING_ON',
    PENDING_OFF ='PENDING_OFF',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: FILTER_STATE.ALL,
    reducers: {
        changed: (state, action) => {
            switch(state) {
    
                case 'ALL':
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return FILTER_STATE.PENDING
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_OFF) {
                        return FILTER_STATE.COMPLETED
                    }
                    else {
                        return state
                    }
        
                case 'COMPLETED':
                    if(action.payload === FILTER_ACTION.COMPLETED_OFF) {
                        return FILTER_STATE.PENDING
                    }
                    else if(action.payload === FILTER_ACTION.PENDING_ON) {
                        return FILTER_STATE.ALL
                    }
                    else {
                        return state
                    }
        
                case 'PENDING':
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
