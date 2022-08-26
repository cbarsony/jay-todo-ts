import { createSelector } from 'reselect'
import { State } from './store'; 

const getTodos = (state: State) => state.todos

export const getFileredTodos = createSelector(
    [getTodos],
    (todos) => {
        return todos;
    },
);
