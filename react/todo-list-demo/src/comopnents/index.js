import React, { Component } from 'react';
import TaskItem from './taskItem'

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            taskArr: [
                {title: "吃饭", complete: false},
                {title: "睡觉", complete: false},
                {title: "骑大虎", complete: false},
            ],
            inputText: '',
            completeNum: 0,
            uncompleteNum: 0
        }
    }

    componentDidMount() {
        const { taskArr } = this.state;
        this.computeTask(taskArr)
        document.addEventListener('keydown', (e) => {
            if(e.which === 13) {
                this.handleAddTask()
            }
        })
    }

    handleAddTask = () => {
        const { inputText, taskArr } = this.state;
        let repeat = taskArr.find((item) => item.title === inputText)
        if(repeat) {
            alert("已经有这个任务了哦，不能添加重复任务哦")
            return
        }
        const newTask = {
            title: inputText,
            complete: false
        }
        let newTaskArr = [ newTask , ...taskArr];
        this.setState({
            taskArr: newTaskArr,
            inputText: ''
        })
        this.computeTask(newTaskArr)
    }

    handleChangeInput = (e) => {
        let value = e.target.value;
        this.setState({
            inputText: value
        })
    }

    handleCheck = (e) => {
        let taskTitle = e.target.name;
        const { taskArr } = this.state;
        let newArr = taskArr.map((item) => {
            if(item.title === taskTitle) {
                item.complete = !item.complete
            }
            return item
        })
        this.setState({
            taskArr: newArr
        })
        this.computeTask(newArr)
    }

    computeTask = (taskArr) => {
        let completeArr = taskArr.filter((item) => item.complete === true);
        this.setState({
            completeNum: completeArr.length,
            uncompleteNum: taskArr.length - completeArr.length
        })
    }

    handleEnterKeyDown = (e) => {
        let x = e.which
        if(x === 13) {
            this.handleAddTask()
        }
    }

    render() {
        const { taskArr, inputText, completeNum, uncompleteNum } = this.state;
        return (
            <div>
                <div className="todoList-input">
                    <input type="text" placeholder="输入任务名称" value={inputText}
                           onChange={(e) => this.handleChangeInput(e)}
                           // onKeyDown={(e) => this.handleEnterKeyDown(e)}
                    />
                    <span onClick={this.handleAddTask}>添加</span>
                </div>
                <TaskItem
                    taskArr={taskArr}
                    handleCheck={this.handleCheck}
                />
                <div className="todoList-complete">
                    <span>已经完成的任务：</span>
                    <span>{completeNum}</span>
                </div>
                <div className="todoList-uncomplete">
                    <span>没有完成的任务</span>
                    <span>{uncompleteNum}</span>
                </div>
            </div>
        )
    }
}

export default TodoList