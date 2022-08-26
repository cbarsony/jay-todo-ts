import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../store/store';

const initialState = [
    {
        id: 1,
        text: 'test todo',
        is_completed: false,
    },
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loaded: (state, action: PayloadAction<Todo[]>) => {
            return action.payload;
        },
        /* updated: (state, action) => {
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        },
        cleared: () => {
            return [];
        }, */
    },
    /* extraReducers: {
        'reset': (state, action) => {
            return null;
        }
    }, */
});

export default todosSlice;
