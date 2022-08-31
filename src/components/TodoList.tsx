import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredTodos } from '../store/selectors'
import { useApi } from '../hooks/useApi'
import { todosSlice } from '../store/slices/todosSlice'
import { Todo } from '../store'
import TodoItem from './TodoItem'

function TodoList() {
    const filteredTodos = useSelector(getFilteredTodos)
    const dispatch = useDispatch()
    const api = useApi()

    const handleToggle = useCallback((todo: Todo) => {
        api.put(`/todos/${todo.id}`, todo)
            .then(response => {
                dispatch(todosSlice.actions.updated(response.data))
            })
    }, [api, dispatch])

    return (
        <div>
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    )
}

export default TodoList
