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

class Project extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        //var projects = [];
        var projects = [
            {   icon: "fa fa-android",
                title : "Web App with Chart.js",
                desc : "Demo of a web application chart with chart.js .",
                techno : [ "Chart.js", "Bootstrap", "ReactJs"]
            }
        ];

        return(
            <div className="project">
                <div>
                    { projects && projects.map(function (item, index ) {
                        return (
                    <div className="row">
                        <div key={index} className="col-sm-12">
                            <div className="col-sm-8">
                                <h3> {item.title} </h3>
                                <ul className="list-inline">
                                    { item.techno && item.techno.map(function (itemTechno, indexTechno){
                                        //console.log("tech", itemTechno, indexTechno);
                                        return (
                                            <li key={indexTechno}>
                                                {itemTechno &&
                                                <h5><label className="label label-default">
                                                    {itemTechno}
                                                </label></h5>
                                                }
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p> {item.desc}</p>

                            </div>
                            <div className="col-sm-4 img-bloc">
                                <img src={ require('./foo.png')} width="200" height="150"/>
                            </div>
                            <br/>

                            <div className="col-sm-8">
                                <ul className="list-inline">
                                    <li>
                                        <Link className="btn btn-info" to="/chartjs">
                                            <i className="glyphicon glyphicon-share-alt"></i> Link
                                        </Link>
                                    </li>
                                </ul>
                                <hr />
                            </div>
                        </div>

                    </div>

                        );
                    })}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);

