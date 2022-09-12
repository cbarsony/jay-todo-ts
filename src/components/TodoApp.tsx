import { useAuth } from '../hooks/useAuth'
import { useUrlParamsListener } from '../hooks/useUrlParamsListener'
import { useFilterListener } from '../hooks/useFilterListener'
import TodoList from './TodoList'
import QueryFilter from './QueryFilter'
import AddTodo from './AddTodo'
import TodoManager from './TodoManager'
import Logout from './Logout'

const TodoApp = () => {
    const isLoggedIn = useAuth()
    useUrlParamsListener()
    useFilterListener()

    return isLoggedIn ? (
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
