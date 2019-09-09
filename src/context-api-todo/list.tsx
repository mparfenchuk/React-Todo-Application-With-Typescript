import React from 'react';

import { remove, toggle } from '../app/actions';

import { useTodoState, useTodoDispatch } from './store';

const List = () => {

    const state = useTodoState()
    const dispatch = useTodoDispatch()

    return (
        <ul>
            {state.todos.map(todo => {
                return (
                    <li key={todo.id} style={{ textDecoration: todo.active ? 'none' : 'line-through'}}>
                        <span onClick={() => dispatch(toggle(todo.id))}>
                            {todo.title}
                        </span>
                        <button onClick={() => dispatch(remove(todo.id))}>
                            Remove It
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;