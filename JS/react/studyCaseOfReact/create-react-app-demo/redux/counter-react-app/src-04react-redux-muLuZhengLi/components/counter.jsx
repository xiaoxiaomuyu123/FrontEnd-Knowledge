import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increase: PropTypes.func.isRequired,
        decrease: PropTypes.func.isRequired
    }

    increase = () => {
        let value = this.select.value * 1;
        this.props.increase(value);
    }

    decrease = () => {
        let value = this.select.value * 1;
        this.props.decrease(value);
    }

    increaseOdd = () => {
        let value = this.select.value * 1;
        if (value % 2 === 1) {
            this.props.increase(value);
        }
    }
    increaseAsync = () => {
        let value = this.select.value * 1;
        setTimeout(() => {
            this.props.increase(value);
        }, 1000)
    }

    render() {
        const {count} = this.props;
        return (
            <Fragment>
                <p>click {count} times</p>
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

export default Counter;