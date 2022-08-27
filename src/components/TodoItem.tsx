import React, { useCallback } from 'react'
import { Todo } from '../store/store'

function TodoItem({todo, onToggle}: {todo: Todo, onToggle: (todo: Todo) => void}) {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onToggle({
            ...todo,
            is_completed: e.target.checked,
        })
    }, [onToggle, todo])

    return (
        <div>
            <span>{todo.text}</span>
            <input
                type="checkbox"
                checked={todo.is_completed}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoItem
