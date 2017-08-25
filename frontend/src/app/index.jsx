import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

ReactDOM.render(
    <MuiThemeProvider theme={createMuiTheme()}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('app')
);
