import React, {Component} from "react"
import {addNumber, subNumber} from "../redux/actions";

import {connect} from 'react-redux'

class Show extends Component {

    render() {
        const {number} = this.props;
        return (
            <div>
                <ul>
                    {
                        number.map((num, index) => {
                            return <li key={index}>{num}</li>
                        })
                    }
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Show)