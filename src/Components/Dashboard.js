import React from 'react';
import './Dashboard.css';
import WidgetText from './Widget/WidgetText';
import WidgetBar from './Widget/WidgetBar';
import WidgetDoughnut from './Widget/WidgetDoughnut';
import WidgetTicker from './Ticker/WidgetTicker';
import LiveClock from './LiveClock/LiveClock';




function Dashboard() {

    const chartData = [
        {
            label: "Venezuela",
            value: "290"
        },
        {
            label: "Saudi",
            value: "260"
        },
        {
            label: "Canada",
            value: "180"
        },
        {
            label: "Iran",
            value: "140"
        },
        {
            label: "Russia",
            value: "115"
        }
    ];



    return (
        <div className="container">
            <LiveClock />
            <div className="row">
                <div className="col-md-6">
                    <WidgetText
                        title="title"
                        value={100}
                        description="sometext"
                    />
                    <WidgetBar
                        title="title"
                        data={chartData}
                    />


                </div>
                <div className="col-md-6">
                    <WidgetText
                        title="title"
                        value={100}
                        description="sometext"
                    />
                    <WidgetBar
                        title="title"
                        data={chartData}
                    />


                </div>

            </div>
            <WidgetDoughnut
                title="title"
                data={chartData}
            />
            <WidgetTicker />

        </div>
    )
}


export default Dashboard;
