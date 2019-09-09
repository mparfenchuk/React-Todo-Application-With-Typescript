import React from 'react';

import { reset } from '../app/actions';

import { useTodoDispatch } from './store';

const ResetButton = () => {

    const dispatch = useTodoDispatch()

    return (
        <button onClick={() => dispatch(reset())}>
            Reset All
        </button>
    )
}

export default ResetButton;
