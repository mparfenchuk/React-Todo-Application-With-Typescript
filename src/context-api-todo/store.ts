import { Dispatch, useContext, createContext } from 'react';

import { State, Actions } from '../app/types';
import { initialState } from '../app/reducer';

export const TodoStateContext = createContext<State>(initialState);
export const TodoDispatchContext = createContext<Dispatch<Actions>>(() => {});

export const useTodoState = () => useContext(TodoStateContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
