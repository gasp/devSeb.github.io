import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

/** Components **/
import NavBar from '../../../components/NavBar/NavBar';
import Footer from '../../../components/Footer/Footer';

/** private Components **/
import Users from '../components/users/Users';
import Infos from '../components/infos/Infos';

/** Reducer Action**/
import * as labsActions from '../redux/actions/labsActions';

/** State **/
const mapStateToProps = (state) => ({
    display: state.reduceLabs.display
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class Labs extends Component {

    static propTypes = {};

    constructor() {
        super();
    }

    componentDidMount () {
    }

    render() {
        var self = this;
        var activeNavBar = "Projects";
        /** Mock **/
        var labsData = [
                {   id : '1',
                    labs: [
                        {
                            country : 'France',
                            city: "Paris",
                            employee: [
                                {id: "FRPA001", firstName: "John", lastName: "Doe", mail: "john@example.com", status: "Manager"},
                                {id: "FRPA002", firstName: "jiji", lastName: "Doe", mail: "jiji@example.com", status: "employee"},
                                {id: "FRPA003", firstName: "juju", lastName: "Doe", mail: "juju@example.com", status: "employee"}
                            ]
                        },
                        {
                            country : 'France',
                            city: "Lyon",
                            employee: [
                                {id: "FRLY001", firstName: "JohnL", lastName: "Doe", mail: "john@example.com", status: "Manager"},
                                {id: "FRLY002", firstName: "jijiL", lastName: "Doe", mail: "jiji@example.com", status: "employee"},
                                {id: "FRLY003", firstName: "jujuL", lastName: "Doe", mail: "juju@example.com", status: "employee"}
                            ]
                        }
                    ]
                },
                {   id : '2',
                    labs: [
                        {
                            country : 'England',
                            city: "London",
                            employee: [
                                {id: "ENLO001", firstName: "Jane", lastName: "Doe", mail: "jane@example.com", status: "Manager"},
                                {id: "ENLO002", firstName: "jojo", lastName: "Doe", mail: "jojo@example.com", status: "employee"},
                                {id: "ENLO003", firstName: "jaja", lastName: "Doe", mail: "jaja@example.com", status: "employee"}
                            ]
                        }
                    ]
                },
                {   id : '3',
                    labs: [
                        {
                            country : 'Belgium',
                            city: "Bruxelles",
                            employee: [
                                {id: "BEBR001", firstName: "Jacky", lastName: "Doe", mail: "jacky@example.com", status: "Manager"},
                                {id: "BEBR002", firstName: "jeje", lastName: "Doe", mail: "jeje@example.com", status: "employee"},
                                {id: "BEBR003", firstName: "jaja", lastName: "Doe", mail: "jaja@example.com", status: "employee"}
                            ]
                        }
                    ]
                }
            ];

        var idSelected = Number(self.props.display.id) - 1;
        //console.log("idSelected", idSelected)
        return(
            <div className="labs">
                <div>
                    <NavBar active={activeNavBar}/>
                </div>

               <div className="container">
                   {!self.props.display.content &&
                        <Users labs={labsData}/>
                   }
                   {self.props.display.content &&
                       <Infos lab={labsData[idSelected]}/>
                   }
               </div>

                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Labs);
