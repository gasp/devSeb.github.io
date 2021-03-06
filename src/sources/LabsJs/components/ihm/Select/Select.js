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

class Select extends Component {

    static propTypes = {
        classNames: PropTypes.object,
        text: PropTypes.string,
        value: PropTypes.string,
        values: PropTypes.array
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value || ''
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({value: nextProps.value});
        }
    }

    _defaultOnChange (event) {
        console.log("event select ", event);
        this.setState({value: event.target.value});
    }

    render() {
        console.log("render Select");
        var self = this;
        //console.log("render input", self.state.value);
        //console.log("element", self.props.lab.labs[0]);

        /** self.state.value **/
        let {onChange} = this.props;
        onChange = onChange || this._defaultOnChange.bind(this);


        return(
            <div className="input">
                <div className="form-group">
                    <label type="text">{self.props.text} </label>
                    <select className="form-control" value={self.props.value} onChange={onChange}>
                        {self.props.values.map(function(item, index){
                            return(
                                <option key={index} value={item.value}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Select);
