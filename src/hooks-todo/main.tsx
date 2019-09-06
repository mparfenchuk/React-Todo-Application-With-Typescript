import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import { add, remove, toggle, reset } from '../app/actions';
import { initialState, reducer } from '../app/reducer';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Link to='/'>home</Link>
            <p>Todos With Hooks</p>
            <Form addTodo={todo => dispatch(add(todo))}/>
            <List 
                todos={state.todos}
                removeTodo={id => dispatch(remove(id))}
                toggleTodo={id => dispatch(toggle(id))}
            />
            <ResetButton reset={() => dispatch(reset())}/>
        </>
    )
}

export default Main;