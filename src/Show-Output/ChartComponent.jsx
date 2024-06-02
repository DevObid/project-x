import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ContextShart } from './Output';

const ChartComponent = () => {
    const data = useContext(ContextShart)

    const options = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
            {
                name: "AM",
                data: [
                    { x: "Mon", y: data.MondayAM },
                    { x: "Tue", y: data.TuesdayAM },
                    { x: "Wed", y: 10 },
                    { x: "Thu", y: 4 },
                    { x: "Fri", y: 7 },
                    { x: "Sat", y: 7 },
                    { x: "Sun", y: 7 },
                ],
            },
            {
                name: "PM",
                data: [
                    { x: "Mon", y: data.MondayPM },
                    { x: "Tue", y: data.TuesdayPM },
                    { x: "Wed", y: 5 },
                    { x: "Thu", y: 5 },
                    { x: "Fri", y: 5 },
                    { x: "Sat", y: 6 },
                    { x: "Sun", y: 3 },
                ],
            },
        ],
        chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 8,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -14
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            floating: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
    };

    return (
        <div className=" bg-white rounded-lg shadow-md">
            <Chart options={options} series={options.series} type="bar" height={320} />
        </div>
    );
};

export default ChartComponent;
