import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { Actions } from '../app/types';
import { AppState } from './store';
import { fetchReset } from './thunk';

const ResetButton = () => {

    const dispatchThunk = useDispatch<ThunkDispatch<AppState, null, Actions>>()

    return(
        <button onClick={() => dispatchThunk(fetchReset())}>
            Reset All
        </button>
    )
}

export default ResetButton;