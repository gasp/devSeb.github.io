import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

import Input from '../ihm/Input/Input';

/** Reducer Action**/
import * as labsActions from '../../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    test: state.reduceLabs.test,
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
            mail: this.props.profile.identity.mail
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps", nextProps);
        var self = this;
        if (  nextProps.profile ) {
            if ( nextProps.profile.identity.id !== this.props.profile.identity.firstName) {
                self.setState({
                    //profile: nextProps.profile,
                    firstName: nextProps.profile.identity.firstName,
                    lastName: nextProps.profile.identity.lastName,
                    mail: nextProps.profile.identity.mail
                })
            }
        }
    }

    componentDidMount () {
        //require('./info.css');
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

    _handleSaveForm(){
        console.log("_handleSaveForm test labsActions");
        console.log("_handleSaveForm test labsActions ",  this.props.labsActions);
        let profile = {
            id: this.props.profile.identity.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mail: this.state.mail
        };
        this.props.labsActions.modifyUserbyLab(profile, this.props.labs);
    }

    render() {
        var self = this;
       // console.log("state", self.state.firstName);
        //console.log("element", self.props.lab.labs[0]);


        /**
         <div className="form-group">
         <div className="col-sm-3">
         <label for="firstName">Firstname</label>
         </div>

         {!self.state.showEdit &&
         <div className="col-sm-9">
             <label onClick={self.showEditFc.bind(self)}>{item.identity.firstName}</label>
         </div>
         }
         {self.state.showEdit &&
         <div>
             <div className="col-sm-7">
                 <input className="form-control input-form" id="firstName" value={item.identity.firstName}/>
             </div>
             <div className="col-sm-1 col-xs-1">
                 <label onClick={self.showEditFc.bind(self)}><i className="fa fa-check" aria-hidden="true"></i></label>
             </div>
             <div className="col-sm-1">
                 <label onClick={self.showEditFc.bind(self)}><i className="fa fa-times" aria-hidden="true"></i></label>
             </div>
         </div>
         }
         </div>

         <div className="form-group col-sm-12">
         <button onClick={self.onClose.bind(self)}> button </button>
         </div>
        **/

        console.log("profile", self.props.profile);
        return(
            <div className="edit-profile">
                <form>
                    <div className="col-sm-6">

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

                        <div className="form-group btn-toolbar">
                            <button type="button" className="btn btn-success" onClick={self._handleSaveForm.bind(self)}> Save </button>
                            <button type="reset" className="btn btn-danger"> Reset </button>
                        </div>


                        {/*
                         <p>{item.identity.lastName}</p>
                         <p>{item.identity.mail}</p>
                         <p>{item.identity.status}</p>
                         <p>{item.country}</p>
                         <p>{item.city}</p>
                         */
                        }
                        <p> coucou </p>

                    </div>
                </form>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
