import { useInit } from '../hooks/useInit'
import TodoList from './TodoList'
import QueryFilter from './QueryFilter'
import AddTodo from './AddTodo'
import TodoManager from './TodoManager'
import Logout from './Logout'

const TodoApp = () => {
    const init = useInit()

    return init ? (
        <>
            <Logout />
            <QueryFilter />
            <AddTodo />
            <TodoList />
            <TodoManager />
        </>
    ) : <div>loading...</div>
}

export default TodoApp
