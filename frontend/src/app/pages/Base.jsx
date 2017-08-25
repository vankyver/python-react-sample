
import React from 'react';
import {ListSubheader, Drawer, Paper, IconButton, IconMenu, Toolbar, List, Divider, ListItemIcon, Avatar} from 'material-ui';

import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';

import Menu from './Menu';

class Base extends React.Component {

    state = {
        drawerOpen: false
    };

    handleOpen = () => this.setState({drawerOpen: !this.state.drawerOpen});

    render = () => <div style={{display: 'flex', height: '100%'}}>

        <Paper style={{maxWidth: 250, height: '100%', width: '100%'}}>
            <Menu/>
        </Paper>

        <div style={{flex: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={this.handleOpen}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="right"
                        open={this.state.drawerOpen}
                        onRequestClose={this.handleOpen}
                        onClick={this.handleOpen}>
                        <Menu/>
                    </Drawer>

                    <Typography type="title" color="inherit" style={{flex: 1}}>
                        Title
                    </Typography>

                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>

            {this.props.children}

        </div>

    </div>
}

export default Base;