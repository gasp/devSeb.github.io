import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import Chart from 'chart.js/src/chart.js';

/** Reducer Action**/
//import * as TestActions from '../../redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
    //element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
    //TestActions: bindActionCreators(TestActions, dispatch)
});

class PieChartjsCustom extends Component {

    static propTypes = {
        id: PropTypes.string,
        data: PropTypes.array
    };

    constructor() {
        super();
    }

    componentDidMount () {
        //require('./LineChartJsCustom.css');
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));
        var self = this;
        var divId = "#"+self.props.id+"-div";
        $(function() {
            $(divId).empty();
            var canvas_lineChart = $('<canvas/>', {id: self.props.id, height: 700, width: 700});
            //canvas_lineChart.css('border', 'solid 0px red');
            $(divId).append(canvas_lineChart);

            var ctx_pieChart = document.getElementById(self.props.id);
            var myPieChart = new Chart(ctx_pieChart,{
                type: 'pie',
                data: {
                    labels: [
                        "Red",
                        "Blue",
                        "Yellow",
                        "Green",
                        "Purple",
                        "Orange"
                    ],
                    datasets: [{
                        data: self.props.data,
                        backgroundColor: [
                            //"#FF6384",
                            //"#36A2EB",
                            //"#FFCE56",
                            //"#FFCE56",
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            //"#FF6384",
                            //"#36A2EB",
                            //"#FFCE56",
                            //"#FFCE56",
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ]
                    }]
                }
            });
        });

        return(
            <div className="pie-chartjs-custom">
                <div id={self.props.id+"-div"}>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PieChartjsCustom);
