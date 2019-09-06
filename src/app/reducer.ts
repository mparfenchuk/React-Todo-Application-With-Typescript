import { State, Actions } from './types';
import { ADD, REMOVE, TOGGLE, RESET } from './constants';

export const initialState: State = {
    todos: []
}

export const reducer = (state = initialState, action: Actions): State => {
    switch(action.type){
        case ADD:
            return {
                todos: [action.todo, ...state.todos]
            }
        case REMOVE:
            return { 
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE:
            return { 
                todos: state.todos.map(todo => 
                    todo.id === action.id 
                    ? {...todo, active: !todo.active} 
                    : todo 
                )
            }
        case RESET:
            return initialState
        default:
            return state
    }
}
