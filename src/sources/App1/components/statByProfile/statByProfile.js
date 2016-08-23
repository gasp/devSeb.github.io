import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import Chart from 'chart.js/src/chart.js';

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

    componentDidMount() {
        require('./statByProfile.css');
    }


    render() {
        console.log("render StatByProfile");
        var self = this;

        //let {onChange} = this.props;
        //onChange = onChange || this._defaultOnChange.bind(this);
        var { profile } = self.props;
        console.log("profile", self.props.profile);

        var data = {
            0: [12, 19, 3, 5, 2, 3]
        };

        $(function() {
            $('#labs-chart1').empty();
            var canvas_lineChart = $('<canvas/>', {id: 'labs-lineChart', height: 400, width: 400});
            //canvas_lineChart.css('border', 'solid 0px red');
            $('#labs-chart1').append(canvas_lineChart);

            var ctx_lineChart = document.getElementById("labs-lineChart");
            var lineChart = new Chart(ctx_lineChart, {
                type: 'line',
                data: {
                    labels: ["January", "February", "Mars", "April", "May", "June"],
                    datasets: [{
                        label: '# of Sales',
                        data: data[0],
                        backgroundColor: 'rgba(255,99,132,1)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1,
                        pointBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        fill: true,
                        spanGaps: true
                    }]
                }
            });
        });

        return(
            <div className="stat-by-profile">
                <h2 className="text-center title"> Chart </h2>
                <div id="labs-chart1" className="text-center">
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (StatByProfile);
