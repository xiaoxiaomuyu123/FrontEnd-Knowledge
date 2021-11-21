import React, {Component} from 'react';

import Add from '../comment-add/comment-add'
import List from '../comment-list/comment-list'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [

            ]
        }

    }

    addComment = (comment) => {
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState(comments)
    }

    deleteComment = (index) => {
        let {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
    }

    render () {
        const {comments} = this.state;
        return (
            <div>
                <h1>对 react 发表评论</h1>
                <Add addComment={this.addComment}/>
                <List comments={comments} deleteComment={this.deleteComment}/>
            </div>
        )
    }
}

export default App