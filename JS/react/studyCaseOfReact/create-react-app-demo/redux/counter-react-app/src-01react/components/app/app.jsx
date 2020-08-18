import React, {Component, Fragment} from 'react';

class App extends Component {

    state = {
        count: 0
    };

    increase = () => {
        let { count } = this.state;
        let value = this.select.value;
        count = count + value * 1;
        this.setState({ count });
    }

    decrease = () => {
        let { count } = this.state;
        let value = this.select.value;
        count = count - value * 1;
        this.setState({ count });
    }

    increaseOdd = () => {
        let { count } = this.state;
        let value = this.select.value;
        if( value % 2 === 1) {
            count = count + value * 1;
            this.setState({ count });
        }

    }
    increaseAsync = () => {
        let { count } = this.state;
        let value = this.select.value;
        setTimeout( () => {
            count = count + value * 1;
            this.setState({ count });
        }, 1000)
    }

    render() {
        const { count } = this.state;
        return (
            <Fragment>
                <p>click { count } times</p>
                <div>
                    <select ref={(select) => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increase}>+</button>
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.increaseOdd}>increase if odd</button>
                    <button onClick={this.increaseAsync}>increase async</button>
                </div>
            </Fragment>
        )
    }
}

export default App