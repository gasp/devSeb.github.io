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
        selectedElement: PropTypes.object
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

        $(function() {
            $('#myPieChart').empty();
            var canvas_lineChart = $('<canvas/>', {id: 'pieChart', height: 700, width: 700});
            //canvas_lineChart.css('border', 'solid 0px red');
            $('#myPieChart').append(canvas_lineChart);

            var ctx_pieChart = document.getElementById("pieChart");
            var myPieChart = new Chart(ctx_pieChart,{
                type: 'pie',
                data: {
                    labels: [
                        "Red",
                        "Blue",
                        "Yellow",
                        "Orange"
                    ],
                    datasets: [{
                        data: [300, 50, 100, 200],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FFCE56"
                        ]
                    }]
                }
            });
        });

        return(
            <div className="pie-chartjs-custom">
                <div id="myPieChart">
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PieChartjsCustom);
