import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from './main'
import HooksTodo from './hooks-todo'
import ReduxThunkTodo from './redux-thunk-todo'
import ReduxSagaTodo from './redux-saga-todo'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/hooks' component={HooksTodo}/>
            <Route exact path='/redux-thunk' component={ReduxThunkTodo}/>
            <Route exact path='/redux-saga' component={ReduxSagaTodo}/>
            <Route component={() => <p>404 Not Found</p>}/>
        </Switch>
    </HashRouter>
);

export default App;
