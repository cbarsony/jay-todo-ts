import { createStore, combineReducers, compose } from 'redux'
import { todosSlice } from './slices/todosSlice'
import { statusFilterSlice } from './slices/statusFilterSlice'
import { queryFilterSlice } from './slices/queryFilterSlice'
import { userSlice } from './slices/userSlice'
import { initSlice } from './slices/initSlice'
import { paginationSlice } from './slices/paginationSlice'

export interface Todo {
    id: number,
    text: string,
    is_completed: boolean,
}

export type State = ReturnType<typeof reducer>

const reducer = combineReducers({
    todos: todosSlice.reducer,
    statusFilter: statusFilterSlice.reducer,
    queryFilter: queryFilterSlice.reducer,
    user: userSlice.reducer,
    isInitialized: initSlice.reducer,
    paginagion: paginationSlice.reducer,
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers())
