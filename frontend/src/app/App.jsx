import React from 'react';
import { Router, Route, IndexRedirect, browserHistory, hashHistory } from 'react-router'

import BasePage from './pages/core/Base'
import BasicTable from './pages/BasicTable'
import ImagePage from './pages/ImagePage'

import styles from '../styles/main.scss';

export default class App extends React.Component {

    /**
     * Routes should be static and shouldn't change during the state change
     * to prevent redrawing of whole page component
     */
    routes = [
        <Route key="root" component={BasePage}>
            <Route path="/" component={BasicTable}/>
            <Route path="/img" component={ImagePage}/>
        </Route>
    ];

    render() {
        return <Router history={hashHistory}>
            {this.routes}
        </Router>
    }

}