import React, { useReducer } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { initialState, reducer } from '../app/reducer';
import Navigation from '../app/navigation';

import { TodoStateContext, TodoDispatchContext } from './store';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <Container maxWidth="sm">
                    <Navigation />
                    <Typography variant="h5">
                        Todos With Context Api
                    </Typography>
                    <Form />
                    <List />
                    <ResetButton />
                </Container>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export default Main;