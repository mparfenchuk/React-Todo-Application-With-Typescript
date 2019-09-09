import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Actions } from '../app/types';
import { AppState } from './store';
import { fetchReset } from './thunk';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
        }
    }),
);

const ResetButton = () => {
    const classes = useStyles()
    const dispatchThunk = useDispatch<ThunkDispatch<AppState, null, Actions>>()

    return(
        <Button 
            onClick={() => dispatchThunk(fetchReset())}
            variant="contained"
            color="secondary"
            className={classes.button}
        >
            Reset
        </Button>
    )
}

export default ResetButton;