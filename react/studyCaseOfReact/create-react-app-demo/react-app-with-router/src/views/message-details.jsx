import React, {Component, Fragment} from 'react';

const msg = [
    {id: 1, title: 'message001', content: 'lalalalalala'},
    {id: 2, title: 'message002', content: 'hahahahahaha'},
    {id: 3, title: 'message003', content: 'enenenenenen'}
];

class MessageDetails extends Component {

    render() {
        console.log('this is component messageDetails');
        const messageId = this.props.match.params;
        console.log('messageID = ', messageId);
        return (
            <Fragment>
                <ul>
                    <li key='1'>id: ???</li>
                    <li key='2'>title: ???</li>
                    <li key='3'>content: ???</li>
                </ul>
            </Fragment>
        )
    }
}

export default MessageDetails