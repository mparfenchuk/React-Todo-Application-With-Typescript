import * as constants from './constants';
import { Todo } from '../app/types';

export interface RequestToAdd {
    type: constants.REQUEST_TO_ADD
    todo: Todo
}

export interface RequestToRemove {
    type: constants.REQUEST_TO_REMOVE
    id: string
}

export interface RequestToToggle {
    type: constants.REQUEST_TO_TOGGLE
    id: string
}

export interface RequestToReset {
    type: constants.REQUEST_TO_RESET
}

export type Actions = RequestToAdd | RequestToRemove | RequestToToggle | RequestToReset
