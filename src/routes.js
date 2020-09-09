import React from 'react'
import Landing from './Components/Landing'
import Profile from './Components/Profile'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/meet-me/:first/:last' component={Profile} />
    </Switch>
)