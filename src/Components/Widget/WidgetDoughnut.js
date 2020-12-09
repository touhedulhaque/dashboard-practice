import React from 'react';

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const WidgetDoughnut = (props) => {
    const chartConfigs = {
        type: "doughnut2d", // The chart type
        width: "100%", // Width of the chart
        height: "125", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                bgColor: "#2a2a2a",
                theme: "fusion"
            },


            // Chart Data - from step 2
            data: props.data
        }
    };
    return (
        <div className="widgetWrap m-3">
            <div className="widgetTitle container">
                {props.title}
            </div>
            <div className="widgetValue container">

                <ReactFC {...chartConfigs} />
            </div>

        </div>
    );
};

export default WidgetDoughnut;