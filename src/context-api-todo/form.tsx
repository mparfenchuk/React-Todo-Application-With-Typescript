import React, { useState } from 'react';

import { add } from '../app/actions';
import { createTodo } from '../app/helpers';

import { useTodoDispatch } from './store';

const Form = () => {

    const [title, setTitle] = useState('')

    const dispatch = useTodoDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todo = createTodo('context_api_todo_', title)

        dispatch(add(todo))
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