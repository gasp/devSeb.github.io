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
    display: state.reduceLabs.display,
    labs: state.reduceLabs.labs
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    labsActions: bindActionCreators(labsActions, dispatch)
});

class Labs extends Component {

    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount () {
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);
    }

    render() {
        var self = this;
        var activeNavBar = "Projects";
        console.log("self.props.labsActions", self.props);

        console.log("self.props.labs", self.props.labs);
        console.log("self.props.2", self.props.labs.data[1]);
        console.log("self.props.3", self.props.display.content);
        /** Mock **/

        var idSelected = Number(self.props.display.id) - 1;
        //console.log("idSelected", idSelected)
        return(
            <div className="labs">
                <div>
                    <NavBar active={activeNavBar}/>
                </div>

               <div className="container">
                   {!self.props.display.content &&
                        <Users labs={self.props.labs.data}/>
                   }
                   {self.props.display.content &&
                        <Infos lab={self.props.labs.data[idSelected]}/>
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
