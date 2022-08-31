import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '..';

//TODO: put back 'null' option later when App init will be needed!
//const initialState = null as Array<Todo> | null
const initialState = [] as Array<Todo>

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loaded: (state, action) => {
            return action.payload;
        },
        updated: (state, action) => {
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        },
        cleared: () => {
            return [];
        },
    },
    /* extraReducers: {
        'reset': (state, action) => {
            return null;
        }
    }, */
})
