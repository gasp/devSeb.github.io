import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
import * as TestActions from '../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
            //element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
        //TestActions: bindActionCreators(TestActions, dispatch)
});

class App extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        var displayInfo  = true;
        return(
            <div>
                <h2> APP</h2>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

