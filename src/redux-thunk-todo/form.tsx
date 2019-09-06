import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Actions } from '../app/types';
import { createTodo } from '../app/helpers';

import { fetchAddTodo } from './thunk';
import { AppState } from './store';

const Form = () => {

    const dispatchThunk = useDispatch<ThunkDispatch<AppState, null, Actions>>()
    
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todo = createTodo('thunk_todo_', title)

        dispatchThunk(fetchAddTodo(todo))
        setTitle('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="todo" 
                type="text" 
                autoComplete="off"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type="submit" 
                value="Add New"
            />
        </form>
    )
}

export default Form;