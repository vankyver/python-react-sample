import React from 'react';

import API from '../API'

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default class TasksList extends React.Component{

    state = {
        tasks: []
    };

    componentDidMount() {
        this.loadTasks()
    }

    loadTasks() {
        API.fetch(API.GET_TASKS)
            .then(response => {
                this.setState({
                    tasks: response.data
                })
            })
    }

    render() {
        return <List selectable ripple>

            {this.state.tasks.map(task =>
                <ListItem
                    key={task}
                    caption={task}
                    legend="one another task"
                    rightIcon='star'
                />
            )}

        </List>
    }
}