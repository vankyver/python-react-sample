import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import BasePage from './pages/Base'
import Tasks from './pages/Tasks'
import Other from './pages/Other'

export default class App extends React.Component {

    /**
     * Routes should be static and shouldn't change during the state change
     * to prevent redrawing of whole page component
     */
    routes = [
        <Route key="root" path="/" component={BasePage}>
            <Route path="/" component={Tasks}/>
            <Route path="tasks" component={Tasks}/>
            <Route path="otherpage" component={Other}/>
            <Route path="*" component={Tasks}/>
        </Route>
    ];

    render() {
        return <Router history={browserHistory}>
            {this.routes}
        </Router>
    }

}