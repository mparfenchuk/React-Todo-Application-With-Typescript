import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';

import { Actions, Todo } from '../app/types';
import { AppState } from './store';
import { fetchToggleTodo, fetchRemoveTodo } from './thunk';

const List = () => {

    const dispatchThunk = useDispatch<ThunkDispatch<AppState, null, Actions>>()
    const todos = useSelector<AppState, Array<Todo>>((state: AppState) => state.todos)

    return(
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.id} style={{ textDecoration: todo.active ? 'none' : 'line-through'}}>
                        <span onClick={() => dispatchThunk(fetchToggleTodo(todo.id))}>
                            {todo.title}
                        </span>
                        <button onClick={() => dispatchThunk(fetchRemoveTodo(todo.id))}>
                            Remove It
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;