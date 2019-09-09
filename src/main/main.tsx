import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Navigation from '../app/navigation';

const Main = () => (
    <Container maxWidth="sm">
        <Navigation />
        <Typography variant="h3" gutterBottom>
            Choose Example
        </Typography>
        <Link 
            component={RouterLink} 
            to='/hooks'
        >
            /hooks
        </Link>
        <br/>
        <Link 
            component={RouterLink} 
            to='/redux-thunk'
        >
            /redux-thunk
        </Link>
        <br/>
        <Link 
            component={RouterLink} 
            to='/redux-saga'
        >
            /redux-saga
        </Link>
        <br/>
        <Link 
            component={RouterLink} 
            to='/context-api'
        >
            /context-api
        </Link>
    </Container>
)

export default Main;