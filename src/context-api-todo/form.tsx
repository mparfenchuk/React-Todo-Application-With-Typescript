import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

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
        <form onSubmit={handleSubmit} autoComplete="off">
            <TextField
                name="todo"
                label="Add todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
                margin="normal"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton 
                            type="submit" 
                            color="primary"
                            size="small"
                        >
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>,
                }}
            />
        </form>
    )
}

export default Form;