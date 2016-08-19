import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Components **/
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Project from '../components/Project/Project';

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
        require('./App.css')
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        var activeNavBar = "App";

        return(
            <div className="app">
                <div>
                    <NavBar active={activeNavBar}/>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-sm-10">
                            <Project />
                        </div>

                        <div className="row col-sm-2 news">
                            <h4><label className="label label-success">
                                Working Progress ...
                            </label></h4>
                            <br/>
                        </div>

                    </div>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

