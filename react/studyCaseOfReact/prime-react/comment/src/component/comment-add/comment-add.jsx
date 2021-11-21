import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Add extends Component {

    state = {
        username: '',
        content: ''
    }

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    nameChange = (event) => {
        const username = event.target.value;
        this.setState({username});
    }

    contentChange = (event) => {
        const content = event.target.value;
        this.setState({content});
    }

    handleSubmit = () => {
        // 取出数据
        const comment = this.state;
        // 更新app数据状态
        this.props.addComment(comment)
        // 数据清零
        this.setState({
                username: '',
                content: ''
            })
    }


    render () {
        const {username, content} = this.state;
        return (
            <div>
                用户名：<input type="text" onChange={this.nameChange} value={username}/><br/>
                评论：<textarea name="" id="" cols="30" rows="10"
                             value={content} onChange={this.contentChange} /><br />
                <input type="submit" value="提交"  onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default Add