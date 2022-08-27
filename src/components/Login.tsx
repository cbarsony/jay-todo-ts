import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useApi from '../hooks/useApi'
import useToast from '../hooks/useToast'
import userSlice from '../store/userSlice'

const Login = () => {
    const [username, setUsername] = useState('user1')
    const [password, setPassword] = useState('pass')
    const auth = useAuth()
    const api = useApi()
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()

    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    useEffect(() => {
        if(auth) {
            history.push('/')
        }
    }, [history, auth])

    const onLoginClick = useCallback(() => {
        api.post('/login', {username, password})
            .then(response => {
                if(response.data.loginSuccess) {
                    dispatch(userSlice.actions.set({
                        id: response.data.id,
                        name: response.data.name,
                    }))
                    history.push('/')
                }
                else {
                    toast.error('Username or password is incorrect')
                    setUsername('user1')
                    setPassword('pass')
                }
            })
    }, [username, password, api, history, dispatch, toast])

    return (
        <div>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={onUsernameChange}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={onPasswordChange}
            />
            <button
                disabled={username === '' || password === ''}
                onClick={onLoginClick}
            >Login</button>
        </div>
    )
}

export default Login
