import React from 'react';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import { RouteComponentProps } from "react-router";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const breadcrumbNameMap: { [key: string]: string } = {
    '/hooks': 'hooks',
    '/redux-thunk': 'redux-thunk',
    '/redux-saga': 'redux-saga',
    '/context-api': 'context-api'
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        breadcrumbs: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }
    })
);

const Navigation = ({ location }: RouteComponentProps) => {
    const classes = useStyles();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <Breadcrumbs className={classes.breadcrumbs}>
            {pathnames.length > 0 ? <Link 
                    component={RouterLink} 
                    to='/'
                    color="inherit"
                >
                    home
                </Link>
            :
                <Typography color="textPrimary">
                    home
                </Typography>}
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography key={to} color="textPrimary">
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <Link
                        key={to}
                        to={to} 
                        component={RouterLink}
                        color="inherit"
                    >
                        {breadcrumbNameMap[to]}
                    </Link>
                );
            })}
        </Breadcrumbs>
    )
}

export default withRouter(Navigation);