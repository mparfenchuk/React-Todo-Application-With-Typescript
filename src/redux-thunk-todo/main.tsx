import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => (
    <Provider store={store}>
        <Link to='/'>home</Link>
        <p>Todos With Redux-Thunk</p>
        <Form />
        <List />
        <ResetButton />
    </Provider>
)

export default Main;