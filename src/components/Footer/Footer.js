import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

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

class Footer extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
        require('./Footer.css');
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        return(
            <div className="footer">
            <footer>
                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <div className="container">
                        <div className="navbar-header">
                            <span className="navbar-text margin-15">
                                2016, <a href="#">DevSeb</a>.  just dev :
                            </span>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

