import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
import * as labsActions from '../../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    display: state.reduceLabs.display
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class LabList extends Component {

    static propTypes = {
        labs: PropTypes.array
    };

    constructor() {
        super();
    }

    componentDidMount () {
        require('./LabList.css');
    }

    loadDisplayLabs(id) {
        console.log("click", id);
        //console.log(this.props.labsActions);
        this.props.labsActions.displayByLabs( !this.props.display.content, id );
    }

    render() {
        console.log("render users class");
        console.log("element", this.props.display);
        console.log("element", this.props.labsActions);
        //console.log("$", $('.test'));
        var self = this;
        var beginAndEndInter = 0;
        var betweenInter = 0;
        var res = (self.props.labs) ? self.props.labs.length : 0;
        console.log("element", res );
        if ( res === 1) { beginAndEndInter = 5;  betweenInter = 0; }
        if ( res === 2) { beginAndEndInter = 3;  betweenInter = 2; }
        if ( res === 3) { beginAndEndInter = 2;  betweenInter = 1; }
        if ( res === 4) { beginAndEndInter = 2;  betweenInter = 0; }
        if ( res === 5) { beginAndEndInter = 1;  betweenInter = 0; }

        return(
            <div className="labs-users">
                <div className="container">
                    <div className="col-sm-1">
                    </div>

                    <div className="col-sm-10 text-center">
                        <div className="row box">
                            <div className="">
                                <h3>Profiles</h3>
                            </div>
                            <br/>

                            <div className="users text-center">

                                <div className={"col-sm-" + beginAndEndInter}>
                                </div>

                                {self.props.labs && self.props.labs.map(function(item, index) {
                                    console.log("item", item );
                                    console.log("item.labs", item.labs );
                                    return (
                                        <div key={index} className="user">
                                            <div className="col-sm-2">
                                                <div className="jumbotron-icon text-center">
                                                    <a href="#" onClick={self.loadDisplayLabs.bind(self, item.id)} >
                                                        <i className="fa fa-user fa-4" aria-hidden="true"></i>
                                                        <p> {item.labs[0].city } </p>
                                                    </a>

                                                </div>
                                            </div>

                                            <div className={"betweenInter col-sm-" + betweenInter}>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className={"col-sm-" + beginAndEndInter}>
                                </div>

                            </div>
                         </div>
                    </div>

                    <div className="col-sm-1">
                    </div>


                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LabList);
