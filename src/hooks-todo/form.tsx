import React, { useState } from 'react';

import { createTodo } from '../app/helpers';
import { Todo } from '../app/types';

interface Props {
    addTodo: (todo: Todo) => void
}

const Form = ({ addTodo }: Props) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todo = createTodo('hooks_todo_', title)

        addTodo(todo)
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