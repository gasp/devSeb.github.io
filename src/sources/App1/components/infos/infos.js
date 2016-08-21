import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
import * as labsActions from '../../redux/actions/labsActions';

import EditProfile from '../editProfile/EditProfile';
import StatByProfile from '../statByProfile/StatByProfile';

/** State **/
const mapStateToProps = (state) => ({
    display: state.reduceLabs.display,
    labs: state.reduceLabs.labs,
    showEditProfile: state.reduceLabs.showEditProfile,
    showStatsByProfile: state.reduceLabs.showStatsByProfile
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class Infos extends Component {

    static propTypes = {
        //lab: PropTypes.object
        id: PropTypes.number
    };

    constructor() {
        super();
        this.state = {
            profile: null
        }
    }

    componentDidMount () {
        require('./info.css');
    }

    componentWillReceiveProps(nextProps) {
        console.log("Infos nextProps", nextProps);
        if ( nextProps.labs.data.date !== this.props.labs.data.date) {
            this.props.labs.data = nextProps.labs.data;
        }
    }

    displayOff() {
        this.props.labsActions.displayByLabs( !this.props.display.content);
        this.props.labsActions.showEditProfile(false);
    }

    editProfile(profile) {
        console.log("user", profile);
        this.props.labsActions.showEditProfile(true);
        this.setState({profile: profile});
    }

    statByProfile() {
        console.log("user");
        this.props.labsActions.showEditStat(true);
        this.props.labsActions.showEditProfile(false);
    }

    onClose() {
        this.setState({editId: null});
    }
    showEditFc() {
        this.setState({showEdit: !this.state.showEdit});
    }



    loadDisplayLabs() {
        //console.log("click");
        //console.log(this.props.labsActions);
       // this.props.labsActions.displayByLabs( !this.props.display.content );
    }

    render() {
        console.log("render info");
        var self = this;
        var lab = [];
        var employees = {};
        for ( let obj of self.props.labs.data[self.props.id].labs) {
            if ( obj.employee ) {
                for (let employee of obj.employee){
                    //console.log("element =>", employee);
                    lab.push({identity: employee, country: obj.country, city: obj.city});
                }
            }
        }

        console.log("lab", lab);
        return(
            <div className="labs-infos">
                <div className="container">
                    hey
                    <a href="#" onClick={self.displayOff.bind(self)}> off </a>

                    {lab &&
                        <div className="">
                            <h2>Labs</h2>
                            <p>The .table-hover class enables a hover state on table rows:</p>
                            <br/>
                            <div className="table-employees">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Mail</th>
                                        <th>Status</th>
                                        <th> </th>
                                    </tr>
                                    </thead>
                                    <tbody className="">
                                    {lab && lab.map(function(item, index) {
                                        return(
                                        <tr key={index} >
                                            <td onClick={self.statByProfile.bind(self )}>{item.identity.firstName}</td>
                                            <td onClick={self.statByProfile.bind(self )}>{item.identity.lastName}</td>
                                            <td onClick={self.statByProfile.bind(self )}>{item.identity.mail}</td>
                                            <td onClick={self.statByProfile.bind(self )}>{item.identity.status}</td>
                                            <td><i className="fa fa-pencil-square-o" aria-hidden="true" onClick={self.editProfile.bind(self, item )}></i> </td>
                                        </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    <br/>
                    <br/>

                    <div className="col-sm-12">
                        {self.props.showEditProfile.display &&
                            <EditProfile profile={self.state.profile} />
                        }
                        <br/>
                        {self.props.showStatsByProfile.display &&
                            <StatByProfile  profile={self.state.profile}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Infos);
