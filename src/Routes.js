import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './modules/home/container/HomeContainer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
    </Switch>
);

export default Routes;