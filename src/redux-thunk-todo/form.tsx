import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

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