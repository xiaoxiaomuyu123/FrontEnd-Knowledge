import {connect} from "react-redux";

import {increase, decrease} from '../../redux/actions';
import Counter from '../../components/counter'

export default connect(
    state => ({count: state}),
    {increase, decrease}
)(Counter);