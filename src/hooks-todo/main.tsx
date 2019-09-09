import React, { useReducer } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { add, remove, toggle, reset } from '../app/actions';
import { initialState, reducer } from '../app/reducer';
import Navigation from '../app/navigation';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Container maxWidth="sm">
            <Navigation />
            <Typography variant="h5">
                Todos With Hooks
            </Typography>
            <Form addTodo={todo => dispatch(add(todo))}/>
            <List 
                todos={state.todos}
                removeTodo={id => dispatch(remove(id))}
                toggleTodo={id => dispatch(toggle(id))}
            />
            <ResetButton reset={() => dispatch(reset())}/>
        </Container>
    )
}

export default Main;