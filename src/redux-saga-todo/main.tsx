import React from 'react';
import { Provider } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Navigation from '../app/navigation';

import store from './store';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => (
    <Provider store={store}>
        <Container maxWidth="sm">
            <Navigation />
            <Typography variant="h5">
                Todos With Redux-Saga
            </Typography>
            <Form />
            <List />
            <ResetButton />
        </Container>
    </Provider>
)

export default Main;