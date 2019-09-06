import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { createTodo } from '../app/helpers';

import { requestToAdd } from './actions';
import { Actions } from './types';

const Form = () => {

    const dispatch = useDispatch<Dispatch<Actions>>()
    
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todo = createTodo('saga_todo_', title)

        dispatch(requestToAdd(todo))
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