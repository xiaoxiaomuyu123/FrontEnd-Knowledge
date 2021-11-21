import React, {Component} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'

import Message from "./message";
import News from "./news";

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>about is here~</h1>
                <NavLink to='/about/news' activeClassName="selected">news</NavLink><br/>
                <NavLink to='/about/messages' activeClassName="selected">message</NavLink>
                <Switch>
                    <Route path='/about/news' component={News}/>
                    <Route path='/about/messages' component={Message}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default About