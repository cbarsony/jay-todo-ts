import { createStore, combineReducers } from 'redux';
import todosSlice from '../slices/todosSlice';
//import filterSlice from '../slices/filterSlice';
//import queryFilterSlice from '../slices/querySlice';
//import userSlice from '../slices/userSlice';

export interface Todo {
    id: number,
    text: string,
    is_completed: boolean,
}

export interface State {
    todos: Todo[],
}

const reducer = combineReducers({
    todos: todosSlice.reducer,
    //filter: filterSlice.reducer,
    //queryFilter: queryFilterSlice.reducer,
    //user: userSlice.reducer,
});

export default createStore(reducer);
