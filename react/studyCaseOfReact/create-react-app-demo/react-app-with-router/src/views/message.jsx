import React, {Component, Fragment} from 'react'
import {NavLink, Route} from 'react-router-dom'

// import MessageDetails from "./message-details";
import Test from "./test";

class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                messages: [
                    {id: 1, title: 'message001'},
                    {id: 2, title: 'message002'},
                    {id: 3, title: 'message003'}
                ]
            })
        }, 1000)
    }

    render() {
        const { messages } = this.state;
        return (
            <Fragment>
                <h2>this is message page~</h2>
                <ul>
                    {
                        messages.map((message, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={`/about/message/messagedetails/${message.id}`}
                                             activeClassName="selected">{message.title}</NavLink>
                                </li>

                            )
                        })
                    }
                </ul>
                <Route path='/about/message/messagedetails/:id' component={Test} />
            </Fragment>
        )
    }
}

export default Message