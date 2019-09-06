import { ThunkAction } from 'redux-thunk';

import { add, remove, toggle, reset } from '../app/actions';
import { Actions, Todo } from '../app/types';
import { apiCall } from '../app/api';

import { AppState } from './store';

export const fetchAddTodo = (todo: Todo): ThunkAction<void, AppState, null, Actions> => async dispatch => {
    try {
        await apiCall(todo)
        dispatch(add(todo))
    } catch(e) {
        console.error(e.message)
    }
}

export const fetchRemoveTodo = (id: string): ThunkAction<void, AppState, null, Actions> => async dispatch => {
    try {
        await apiCall(id)
        dispatch(remove(id))
    } catch(e) {
        console.error(e.message)
    }
}

export const fetchToggleTodo = (id: string): ThunkAction<void, AppState, null, Actions> => async dispatch => {
    try {
        await apiCall(id)
        dispatch(toggle(id))
    } catch(e) {
        console.error(e.message)
    }
}

export const fetchReset = (): ThunkAction<void, AppState, null, Actions> => async dispatch => {
    try {
        await apiCall()
        dispatch(reset())
    } catch(e) {
        console.error(e.message)
    }
}
