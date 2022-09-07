import { useAuth } from '../hooks/useAuth'
import { useInit } from '../hooks/useInit'
import { useUrlParamsListener } from '../hooks/useUrlParamsListener'
import { useFilterListener } from '../hooks/useFilterListener'
import TodoList from './TodoList'
import QueryFilter from './QueryFilter'
import AddTodo from './AddTodo'
import TodoManager from './TodoManager'
import Logout from './Logout'

const TodoApp = () => {
    useAuth()
    const init = useInit()
    useUrlParamsListener()
    useFilterListener()

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
