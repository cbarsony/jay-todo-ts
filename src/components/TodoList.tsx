import { useSelector } from 'react-redux';
import { getFileredTodos } from '../store/selectors';

const TodoList = () => {
    const todos = useSelector(getFileredTodos)

    return (
        <div>{todos.map(todo => (
            <div key={todo.id}>
                <span>{todo.text} </span>
                <span>{todo.is_completed ? 'completed' : 'pending'}</span>
            </div>
        ))}</div>
    );
};

export default TodoList;
