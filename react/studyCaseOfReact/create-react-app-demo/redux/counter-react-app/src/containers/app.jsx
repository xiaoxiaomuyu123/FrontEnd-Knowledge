import {connect} from "react-redux";

import Counter from '../components/counter';
import {increase, decrease} from '../redux/actions'

const App = connect(
    state => ({count: state}),
    {increase, decrease}
)(Counter)

export default App;