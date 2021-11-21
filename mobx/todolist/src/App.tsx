import React, {Component} from 'react';
import './App.css';


interface IState {
    todoList: Array<ITodoListItem>
}

interface ITodoListItem {
    tittle: string, // 必选
    completeStatus?: boolean // ? 表示可选
}

interface IProps {
    [propsName: string] : any
}

class App extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            todoList: [
                {tittle: 'learning ts', completeStatus: false},
                {tittle: 'learning mobx', completeStatus: false},
                {tittle: 'learning react', completeStatus: true}
            ]
        }
    }

    render() {
        const {todoList} = this.state;
        return (
            <div>
                <h1>TODO list with redux</h1>
                <div>
                    <input type="text"/>
                    <button>添加</button>
                </div>
                <div>
                    {
                        todoList.map((item: any) => {
                            return (
                                <input type="checkbox" name={item} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default App;
