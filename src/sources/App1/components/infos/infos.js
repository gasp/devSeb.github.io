import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Reducer Action**/
import * as labsActions from '../../redux/actions/labsActions';

import EditProfile from '../editProfile/EditProfile';

/** State **/
const mapStateToProps = (state) => ({
    display: state.reduceLabs.display
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class Infos extends Component {

    static propTypes = {
        lab: PropTypes.object
    };

    constructor() {
        super();
        this.state = {
            profile: null,
            showEdit: false
        }
    }

    componentDidMount () {
        require('./info.css');
    }

    displayOff() {
        this.props.labsActions.displayByLabs( !this.props.display.content);
    }

    edit(profile){
        console.log("user", profile);
        this.setState({profile: profile});
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
        var self = this;
        console.log("element", self.props.lab.labs[0]);
        var lab = [];
        var employees = {};

        for ( let obj of self.props.lab.labs) {
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

                    {self.props.lab &&
                        <div className="table-employees">
                            <h2>Labs</h2>
                            <p>The .table-hover class enables a hover state on table rows:</p>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Mail</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {lab && lab.map(function(item, index) {
                                    //console.log("item", item);
                                    return(
                                    <tr key={index} onClick={self.edit.bind(self, item )}>
                                        <td>{item.identity.firstName}</td>
                                        <td>{item.identity.lastName}</td>
                                        <td>{item.identity.mail}</td>
                                        <td>{item.identity.status}</td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    }

                    {self.state.profile &&
                        <EditProfile profile={self.state.profile} />
                    }

                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Infos);
