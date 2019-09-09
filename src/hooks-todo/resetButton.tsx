import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props {
    reset: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
        }
    }),
);

const ResetButton = ({ reset }: Props) => {
    const classes = useStyles()

    return (
        <Button 
            onClick={() => reset()}
            variant="contained"
            color="secondary"
            className={classes.button}
        >
            Reset
        </Button>
    )
}

export default ResetButton;
