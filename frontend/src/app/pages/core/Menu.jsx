import React from 'react';
import {Link} from 'react-router';

import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import MemoryIcon from 'material-ui-icons/Memory';
import GraphicIcon from 'material-ui-icons/GraphicEq';

import {ListSubheader, ListItem, ListItemIcon, ListItemText, IconMenu, List, Divider, Avatar} from 'material-ui';

const MenuConfig = [
    {
        icon: <InboxIcon/>,
        primaryText: 'Inbox',
        secondaryText: '',
        location: '/'
    },
    {
        icon: <DraftsIcon/>,
        primaryText: 'Drafts',
        secondaryText: '',
        location: '/img'
    },
    {
        icon: <GraphicIcon/>,
        primaryText: 'Graphic',
        secondaryText: '',
        location: '/img',
        children: []
    },
    {
        icon: <MemoryIcon/>,
        primaryText: 'Storage',
        secondaryText: '',
        location: '/img'
    }
];

const MenuItems = () => MenuConfig.map(i =>
    <Link key={i.primaryText} to={i.location}>
        <ListItem button>
            <ListItemIcon>{i.icon}</ListItemIcon>
            <ListItemText primary={i.primaryText} secondary={i.secondaryText}/>
            {i.children && <List>

            </List>}
        </ListItem>
    </Link>
);

const Menu = () =>
        <List subheader={<ListSubheader style={{height: 64}}>Here is my header</ListSubheader>}>

            <Divider/>

            {MenuItems()}

        </List>

export default Menu;
