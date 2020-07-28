import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    handleClick = (index) => {
        const {comment, deleteComment} = this.props;
        if(window.confirm(`确定删除${comment.username}的评论吗`)) {
            deleteComment(index);
        }
    }

    render () {
        const {comment} = this.props;
        return (
            <div>
                <li>
                    <span>{comment.username}</span><br />
                    <p>{comment.content}</p>
                    <button onClick={this.handleClick}>删除</button>
                </li>
            </div>
        )
    }
}

export default Item