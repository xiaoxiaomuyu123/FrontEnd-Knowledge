import React, { Component } from 'react'

class TaskItem extends Component {
    constructor() {
        super();
    }

    render() {
        const { taskArr } = this.props;
        return (
            <div className="todoList-list">
                {
                    taskArr.map((item) => {
                        return (
                            <div className="todoList-list-item">
                                <input type="checkbox" name={item.title} checked={item.complete ? "checked" : ""}
                                       onChange={this.props.handleCheck}/>
                                <span>{item.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TaskItem