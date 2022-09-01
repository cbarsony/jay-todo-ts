import { createStore, combineReducers } from 'redux'
import { todosSlice } from './slices/todosSlice'
import { filterSlice } from './slices/filterSlice'
import { queryFilterSlice } from './slices/querySlice'
import { userSlice } from './slices/userSlice'
import { initSlice } from './slices/initSlice'
import { compose } from 'redux'

export interface Todo {
    id: number,
    text: string,
    is_completed: boolean,
}

export type State = ReturnType<typeof reducer>

const reducer = combineReducers({
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
    queryFilter: queryFilterSlice.reducer,
    user: userSlice.reducer,
    isInitialized: initSlice.reducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers())
