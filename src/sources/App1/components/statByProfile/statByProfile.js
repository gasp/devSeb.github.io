import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
//import * as labsActions from '../../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    //display: state.reduceLabs.display
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    //labsActions: bindActionCreators(labsActions, dispatch)
});

class StatByProfile extends Component {

    static propTypes = {
        profile : PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }


    render() {
        console.log("render Input");
        var self = this;
        //console.log("render input", self.state.value);
        //console.log("element", self.props.lab.labs[0]);
        //let {onChange} = this.props;
        //onChange = onChange || this._defaultOnChange.bind(this);
        var { profile } = self.props;
        console.log("profile", self.props.profile);

        return(
            <div className="stat-by-profile">
                <div className="col-sm-6">
                    <h2 className="text-center"> Chart </h2>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (StatByProfile);
