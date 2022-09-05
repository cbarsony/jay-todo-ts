import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useApi } from '../hooks/useApi'
import { useInit } from '../hooks/useInit'
import TodoList from './TodoList'
import QueryFilter from './QueryFilter'
import AddTodo from './AddTodo'
import TodoManager from './TodoManager'
import Logout from './Logout'
import { getFilter, getQueryFilter } from '../store/selectors'
import { todosSlice } from '../store/slices/todosSlice'
import { useQuery } from '../hooks/useQuery'
import { useFilterListener } from '../hooks/useFilterListener'

const TodoApp = () => {
    const api = useApi()
    const init = useInit()
    const dispatch = useDispatch()
    useQuery()
    useFilterListener()

    return init ? (
        <>
          <a href="/">Jay Todo TS</a>
          <Logout />
          <QueryFilter />
          <AddTodo />
          <TodoList />
          <TodoManager />
        </>
    ) : <div>loading...</div>
}

export default TodoApp
