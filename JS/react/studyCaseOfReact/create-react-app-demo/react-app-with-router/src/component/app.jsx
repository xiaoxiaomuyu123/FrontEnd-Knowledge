import React, {Component} from 'react';
import {NavLink, Switch, Redirect, Route} from 'react-router-dom';

import Home from '../views/home'
import About from '../views/about'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <NavLink to='/home'>home</NavLink>
                    <NavLink to='/about'>about</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/about' xomponent={About}/>
                        <Redirect />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default App