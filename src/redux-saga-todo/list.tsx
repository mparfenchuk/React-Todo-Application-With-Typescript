import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { Todo } from '../app/types';

import { requestToToggle, requestToRemove } from './actions';
import { Actions } from './types';
import { AppState } from './store';

const List = () => {

    const dispatch = useDispatch<Dispatch<Actions>>()
    const todos = useSelector<AppState, Array<Todo>>(state => state.todos)

    return(
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.id} style={{ textDecoration: todo.active ? 'none' : 'line-through'}}>
                        <span onClick={() => dispatch(requestToToggle(todo.id))}>
                            {todo.title}
                        </span>
                        <button onClick={() => dispatch(requestToRemove(todo.id))}>
                            Remove It
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;