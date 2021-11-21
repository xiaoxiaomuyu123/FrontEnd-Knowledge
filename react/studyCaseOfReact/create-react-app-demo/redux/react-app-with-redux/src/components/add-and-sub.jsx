import React, {Component} from "react"

import {connect} from 'react-redux'
import {addNumber, subNumber}  from "../redux/actions"

class AddAndSub extends Component {

    add = () => {
        this.props.addNumber(1)
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <button>-</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {number: state}
};
const mapDispatchToProps = {
    addNumber,
    subNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAndSub)