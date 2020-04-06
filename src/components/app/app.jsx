import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact />
            </Switch>
        </Router>
    );
};
