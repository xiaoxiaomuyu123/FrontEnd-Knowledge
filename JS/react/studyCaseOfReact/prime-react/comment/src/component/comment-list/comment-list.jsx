import React, {Component} from "react"
import PropTypes from "prop-types"

import Item from "../comment-item/comment-item"

class List extends Component {

   static propTypes = {
       comments: PropTypes.array.isRequired,
       deleteComment: PropTypes.func.isRequired
   }

    render() {
        const {comments, deleteComment} = this.props;
        console.log("comments", comments);
        const display = comments.length === 0 ? 'block' : 'none';
        return (
            <div>
                <h2>评论回复</h2>
                <h3 style={{display}}>暂无评论</h3>
                <ul>
                    {
                        comments.map((comment, index) => {
                            return (
                               <Item key={index} comment={comment}
                                     deleteComment={deleteComment} index={index}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default List