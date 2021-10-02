import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './pages/Users';
import Todos from './pages/Todos';

const App = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Users} exact />
                <Route path="/todos/:id" component={Todos} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default App;