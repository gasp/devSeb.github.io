import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Components **/
import NavBar from '../components/NavBar/NavBar';

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

class Error404 extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        var activeNavBar = "Projects";
        return(
            <div>
                <div className="container">
                    <NavBar active={activeNavBar}/>
                </div>
                <div className="container">
                   Error
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Error404);

