import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { requestToReset } from './actions';
import { Actions } from './types';

const ResetButton = () => {

    const dispatch = useDispatch<Dispatch<Actions>>()

    return(
        <button onClick={() => dispatch(requestToReset())}>
            Reset All
        </button>
    )
}

export default ResetButton;