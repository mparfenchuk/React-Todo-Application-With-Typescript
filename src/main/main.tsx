import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
    <>
        <Link to='/hooks'>hooks</Link>or
        <Link to='/redux-thunk'>redux-thunk</Link>or
        <Link to='/redux-saga'>redux-saga</Link>or
        <Link to='/context-api'>context-api</Link>
    </>
)

export default Main;