import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './modules/home/container/HomeContainer';
import FeedbackContainer from './modules/feedback/container/FeedbackContainer';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/feedback" component={FeedbackContainer} />
    </Switch>
);

export default Routes;