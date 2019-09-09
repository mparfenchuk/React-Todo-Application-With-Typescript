import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { reset } from '../app/actions';

import { useTodoDispatch } from './store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
        }
    }),
);

const ResetButton = () => {
    const classes = useStyles()
    const dispatch = useTodoDispatch()

    return (
        <Button 
            onClick={() => dispatch(reset())}
            variant="contained"
            color="secondary"
            className={classes.button}
        >
            Reset
        </Button>
    )
}

export default ResetButton;
