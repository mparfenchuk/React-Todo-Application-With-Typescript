import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { requestToReset } from './actions';
import { Actions } from './types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
        }
    }),
);

const ResetButton = () => {
    const classes = useStyles()
    const dispatch = useDispatch<Dispatch<Actions>>()

    return(
        <Button 
            onClick={() => dispatch(requestToReset())}
            variant="contained"
            color="secondary"
            className={classes.button}
        >
            Reset
        </Button>
    )
}

export default ResetButton;