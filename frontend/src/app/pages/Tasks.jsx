import React from 'react';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import TasksList from '../components/TasksList'

export default class Tasks extends React.Component{

    render() {
        return <Card>

            <CardTitle title="This is a list of Taks"/>

            <CardText>
                <TasksList/>
            </CardText>

        </Card>
    }
}