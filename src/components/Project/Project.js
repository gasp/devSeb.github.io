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
        require("./Projects.less");
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));

        //var projects = [];

        let imgChartJsApp = require('./img/ChartjsApp.png');
        let imgLabsApp = require('./img/imgLabs.png');
        var projects = [

            {   icon: "fa fa-android",
                title : "Managing Labs",
                desc : "Demo of a web application with form and manage data with redux.",
                techno : [ "es6", "Promise", "React Js","React Redux", "Bootstrap", "Less", "Chart.js", "Gmap.js (Google map)", "Geocoder (Google)"],
                link : "/labs",
                source: "https://github.com/devSeb/devSeb.github.io/tree/master/src/sources/LabsJs",
                img :imgLabsApp,
                inProgress: "In Progress ..."
            },
            {   icon: "fa fa-android",
                title : "React-native Examples ",
                desc : "Demos of react native projects",
                techno : [ "es6", "react-native", "Mobile App"],
                link : null,
                source: "https://github.com/devSeb/react-native-demos",
                img : null
            },
            {   icon: "fa fa-android",
                title : "Web App with Chart.js",
                desc : "Demo of a web application chart with chart.js .",
                techno : [ "es6", "ReactJs",  "Bootstrap",  "Chart.js"],
                link : "/chartjs",
                source: "https://github.com/devSeb/devSeb.github.io/tree/master/src/sources/ChartJs",
                img :imgChartJsApp
            }
        ];

        return (
            <div className="projects">
                <div>
                    { projects && projects.map(function (item, index ) {
                        return (
                            <div key={index} className="row">
                                <div className="col-sm-12">

                                    <div className="col-sm-9">
                                        { item.inProgress &&
                                            <span className="label label-danger"> {item.inProgress}</span>
                                        }
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

                                    <div className="col-sm-3 img-bloc">
                                        {item.img &&
                                            <img src={ item.img } width="200" height="150"/>
                                        }
                                    </div>

                                    <br/>

                                    <div className="col-sm-9">
                                        <ul className="list-inline">
                                            {item.link &&
                                                <li>
                                                    <Link className="btn btn-info" to={item.link}>
                                                        <i className="glyphicon glyphicon-share-alt"></i> Demo
                                                    </Link>
                                                </li>
                                            }
                                                <li>
                                                   <a href={item.source} target="_blank" className="btn btn-primary">
                                                        <i className="fa fa-github" aria-hidden="true"></i> Sources
                                                    </a>
                                                </li>
                                        </ul>

                                    </div>
                                    <div className="col-sm-12">
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

