import React from 'react';

import { Todo } from '../app/types';

interface Props {
    todos: Array<Todo>,
    removeTodo: (id: string) => void,
    toggleTodo: (id: string) => void
}

const List = ({ todos, removeTodo, toggleTodo }: Props) => (
    <ul>
        {todos.map(todo => {
            return (
                <li key={todo.id} style={{ textDecoration: todo.active ? 'none' : 'line-through'}}>
                    <span onClick={() => toggleTodo(todo.id)}>
                        {todo.title}
                    </span>
                    <button onClick={() => removeTodo(todo.id)}>
                        Remove It
                    </button>
                </li>
            )
        })}
    </ul>
)

export default List;