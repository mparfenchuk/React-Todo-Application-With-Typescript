import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import { initialState, reducer } from '../app/reducer';

import { TodoStateContext, TodoDispatchContext } from './store';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <Link to='/'>home</Link>
                <p>Todos With Context Api</p>
                <Form />
                <List />
                <ResetButton />
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export default Main;