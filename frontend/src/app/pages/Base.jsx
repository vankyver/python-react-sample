import React from 'react';

import Link from 'react-toolbox/lib/link';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

export default class Base extends React.Component {

    onLinkClick(pathname) {
        this.context.router.push({pathname})
    }

    render() {
        return <div>

            <AppBar title='React Toolbox' leftIcon='menu'>
                <Navigation type='horizontal'>
                    <Link active label='Tasks' icon='inbox' onClick={()=>this.onLinkClick('tasks')}  />
                    <Link label='Others' icon='person' onClick={()=>this.onLinkClick('otherpage')} />
                </Navigation>
            </AppBar>

            {this.props.children}

        </div>
    }
}

Base.contextTypes = {
    router: React.PropTypes.object.isRequired
};