import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import App from '../App'
import Video from '../Video'

class Root extends React.Component{

    render(){
        return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/video" component={Video} />
        </Switch>)
    }
};

export default Root
