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

class LineChartJsCustom extends Component {

    static propTypes = {
        selectedElement: PropTypes.object
    };

    constructor() {
        super();
    }

    componentDidMount () {
        require('./LineChartJsCustom.css');
    }

    render() {
        //console.log("element", this.props.element.text);
        //console.log("$", $('.test'));
        var self = this;
        console.log("element", this.props.selectedElement);
        var data = {
            0: [12, 19, 3, 5, 2, 3],
            1: [12, 19, 3, 5, 2, 3],
            2: [12, 19, 3, 5, 2, 3],
            3: [12, 19, 3, 5, 2, 3],
            4: [12, 19, 3, 5, 2, 3],
            5: [12, 19, 3, 5, 2, 3]
        };

        $(function() {
            $('#element2').empty();
            var canvas_lineChart = $('<canvas/>', {id: 'lineChart', height: 700, width: 700});
            //canvas_lineChart.css('border', 'solid 0px red');
            $('#element2').append(canvas_lineChart);

            var ctx_lineChart = document.getElementById("lineChart");
            var lineChart = new Chart(ctx_lineChart, {
                type: 'line',
                data: {
                    labels: ["January", "February", "Mars", "April", "May", "June"],
                    datasets: [{
                        label: '# of Sales',
                        data: data[self.props.selectedElement.index],
                        backgroundColor: self.props.selectedElement.color,
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
            <div className="line-chartjs-custom">
                <div className="">
                    <div className="col-sm-7" >
                        <h2>{this.props.selectedElement.name}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum mollis neque ornare erat posuere, quis pharetra lorem bibendum.
                            Duis tempus accumsan tincidunt. Nullam rhoncus imperdiet libero ac fermentum.
                            Maecenas pulvinar viverra odio, eleifend faucibus neque. Donec a nulla ac sapien facilisis congue.
                            Nullam sit amet ipsum scelerisque, consectetur eros a, porttitor felis. Pellentesque non efficitur purus.
                        </p>
                        <p>
                            Morbi tristique vehicula lacus ac vestibulum.
                            Ut velit metus, suscipit id sapien at, volutpat convallis augue.
                            Praesent accumsan pellentesque semper. Mauris vitae odio ante.
                            Sed sagittis elit vel augue eleifend auctor. Vivamus ut faucibus tellus.
                            Pellentesque aliquam est ac quam fermentum, ut dapibus est fringilla.
                            Phasellus vitae ullamcorper nisi. Etiam nibh turpis, accumsan et urna suscipit, blandit sollicitudin felis.
                            Nulla elementum nisl sed turpis rhoncus placerat. Donec ornare risus ipsum, vel laoreet enim eleifend vitae.
                            Ut euismod pretium nunc non porta. Duis a placerat lorem. Sed rhoncus diam non libero egestas placerat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="col-sm-5 position" id="element2">
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LineChartJsCustom);
