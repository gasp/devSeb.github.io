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

                        <div className="col-sm-7">
                            <Project />
                        </div>

                        <div className="col-sm-3"></div>

                        <div className="col-sm-2 news">
                            <h3><label className="label label-default">My Profile </label></h3>
                            <br/>
                             <div>
                                 <h3>Web engineer</h3>
                                 <p>I'm Sébastien , Miage web developer.
                                     I studied at Paris XII University,
                                     <a href="https://www.miage.u-pec.fr/" target="_blank" > MIAGE UPEC </a>.
                                     <br/>
                                     <br/>
                                     You can follow me on these socials networks:
                                 </p>
                                 <ul className="list-inline">
                                     <li>
                                         <a href="https://fr.linkedin.com/in/sebastien-maillard-695b4075" target="_blank" >
                                            <i className="fa fa-linkedin-square icon-fa-2 color-blue" aria-hidden="true"></i>
                                         </a>
                                     </li>
                                     <li>
                                         <a href="https://github.com/devSeb" target="_blank">
                                            <i className="fa fa-github-square icon-fa-2" aria-hidden="true"></i>
                                         </a>
                                     </li>
                                </ul>
                             </div>
                            <br/>
                            <br/>
                            <br/>
                        </div>

                </div> {/* container */}

                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

