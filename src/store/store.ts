import { createStore, combineReducers } from 'redux';
import todosSlice from './todosSlice';
import filterSlice from '../store/filterSlice';
import queryFilterSlice from '../store/querySlice';
import userSlice from './userSlice';

export interface Todo {
    id: number,
    text: string,
    is_completed: boolean,
}

export type State = ReturnType<typeof reducer>

/* export interface State {
    todos: Todo[],
} */

const reducer = combineReducers({
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
    queryFilter: queryFilterSlice.reducer,
    user: userSlice.reducer,
});

export default createStore(reducer);
