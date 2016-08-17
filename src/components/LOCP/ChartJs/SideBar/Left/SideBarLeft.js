import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import Chart from 'chart.js/src/chart.js';


import PieChartjsCustom from '../../PieChartjsCustom/PieChartjsCustom';

/** Reducer Action**/
//import * as TestActions from '../../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
    //element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    //TestActions: bindActionCreators(TestActions, dispatch)
});

class SideBarLeft extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./SideBarLeft.css');
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        return(
            <div className="side-bar-left">
                <div className="col-sm-12">
                    <div className="title-sidebar text-center">
                        <h3> titre </h3>
                    </div>
                    <div className="body-sidebar text-center">
                            <h2>Identification Globale</h2>
                            <PieChartjsCustom />
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarLeft);
