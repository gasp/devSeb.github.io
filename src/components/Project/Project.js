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

        var projects = [];
        //var projects = [
        //    {   icon: "fa fa-android",
        //        title : "Title",
        //        desc : "description",
        //        techno : [ "test"]
        //    }
        //];

        return(
            <div className="project">
                <div>
                    { projects && projects.map(function (item, index ) {
                        return (
                    <div className="container">
                        <h2> {item.title} </h2>
                        <ul className="list-inline">
                            { item.techno && item.techno.map(function (itemTechno, indexTechno){
                                //console.log("tech", itemTechno, indexTechno);
                                return (
                                    <li key={indexTechno}>
                                        {itemTechno &&
                                        <h4><label className="label label-default">
                                            {itemTechno}
                                        </label></h4>
                                        }
                                    </li>
                                );
                            })}
                        </ul>
                        <p> {item.desc}</p>
                        <ul className="list-inline">
                            <li>
                                <a className="btn btn-info" href="#">
                                    <i className="glyphicon glyphicon-share-alt"></i> Link
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>

                        );
                    })}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);

