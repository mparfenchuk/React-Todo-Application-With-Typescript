import { Todo } from '../app/types';
import { RequestToAdd, RequestToRemove, RequestToToggle, RequestToReset } from './types';
import * as constants from './constants';

export const requestToAdd = (todo: Todo): RequestToAdd => ({ type: constants.REQUEST_TO_ADD, todo })
export const requestToRemove = (id: string): RequestToRemove => ({ type: constants.REQUEST_TO_REMOVE, id })
export const requestToToggle = (id: string): RequestToToggle => ({ type: constants.REQUEST_TO_TOGGLE, id })
export const requestToReset = (): RequestToReset => ({ type: constants.REQUEST_TO_RESET })
