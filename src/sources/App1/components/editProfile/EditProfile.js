import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

import Input from '../ihm/Input/Input';

/** Reducer Action**/
import * as labsActions from '../../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    labs: state.reduceLabs.labs
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class EditProfile extends Component {

    static propTypes = {
        profile: PropTypes.object
    };



    constructor(props, context) {
        super(props, context);
        //console.log("props", this.props, this.props.profile.identity.firstName);
        this.state = {
            //profile: this.props.profile,
            firstName: this.props.profile.identity.firstName,
            lastName: this.props.profile.identity.lastName,
            mail: this.props.profile.identity.mail,
            status: this.props.profile.identity.status,
        }
    }

    componentDidMount () {
        require('./editProfile.css');
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps EditProfile", nextProps);
        var self = this;
        if (  nextProps.profile ) {
            if ( nextProps.profile.identity.id !== this.props.profile.identity.firstName) {
                self.setState({
                    //profile: nextProps.profile,
                    firstName: nextProps.profile.identity.firstName,
                    lastName: nextProps.profile.identity.lastName,
                    mail: nextProps.profile.identity.mail,
                    status: nextProps.profile.identity.status
                })
            }
        }
    }


    handleChangeFirstName(event){
        //console.log("value", event.target.value);
        this.setState({firstName: event.target.value});
    }

    handleChangeLastName(event){
        //console.log("value", event.target.value);
        this.setState({lastName: event.target.value});
    }

    handleChangeMail(event){
        //console.log("value", event.target.value);
        this.setState({mail: event.target.value});
    }

    handleChangeStatus(event){
        //console.log("value", event.target.value);
        this.setState({status: event.target.value});
    }

    _handleSaveForm(){
        console.log("_handleSaveForm test labsActions");
        console.log("_handleSaveForm test labsActions ",  this.props.labsActions);
        let profile = {
            id: this.props.profile.identity.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mail: this.state.mail,
            status: this.state.status
        };
        this.props.labsActions.modifyUserbyLab(profile, this.props.labs.data);
    }

    render() {
        console.log("render EditProfile");
        var self = this;
       // console.log("state", self.state.firstName);
        //console.log("element", self.props.lab.labs[0]);

       // console.log("profile", self.props.profile);
        return (
            <div className="edit-profile">
                    <div className="col-sm-6 margin">

                        <h2 className="text-center"> Edit Profile </h2>

                        <div className="form-group">
                            <Input classNames={ {icon: "fa-fa"}}
                                   text="Firstname"
                                   value={self.state.firstName}
                                   onChange={self.handleChangeFirstName.bind(self) }/>
                        </div>

                        <div className="form-group">
                            <Input classNames={ {icon: "fa-fa"}}
                                   text="Lastname"
                                   value={self.state.lastName}
                                   onChange={self.handleChangeLastName.bind(self) }/>
                        </div>

                        <div className="form-group">
                            <Input classNames={ {icon: "fa-fa"}}
                                   text="Mail"
                                   value={self.state.mail}
                                   onChange={self.handleChangeMail.bind(self) }/>
                        </div>

                        <div className="form-group">
                            <Input classNames={ {icon: "fa-fa"}}
                                   text="Status"
                                   value={self.state.status}
                                   onChange={self.handleChangeStatus.bind(self) }/>
                        </div>

                        <div className="form-group btn-toolbar">
                            <button type="button" className="btn btn-success" onClick={self._handleSaveForm.bind(self)}> Save </button>
                            <button type="reset" className="btn btn-danger"> Reset </button>
                        </div>

                    </div>

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
