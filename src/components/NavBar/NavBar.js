import React, { Component, PropTypes } from 'react';
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


class NavBar extends Component {

    static propTypes = {
        activeNavBar : PropTypes.string
    };

    constructor() {
        super();
    }

    componentDidMount () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    render() {
        //console.log("element", this.props.element.text);
        if ( this.props.activeNavBar ) {
            console.log("NavBar :", this.props.activeNavBar);
        }
        return(
            <div className="nav-bar">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">DevSeb</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">

                                <li className={this.props.activeNavBar === "Projects" ? "active" : ""}>
                                    <Link to="/projects">
                                        <span data-toggle="tooltip"
                                              data-placement="bottom"
                                              title="in progress...">
                                            Projects
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export default  connect(mapStateToProps, mapDispatchToProps)(NavBar);
