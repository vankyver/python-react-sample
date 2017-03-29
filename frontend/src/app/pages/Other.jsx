import React from 'react';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

import TasksList from '../components/TasksList'

export default class Tasks extends React.Component{

    render() {
        return <Card>

            <CardText>
                This is the other page
            </CardText>

        </Card>
    }
}