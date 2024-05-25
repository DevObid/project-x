import React, { useContext } from 'react';
import Chart from 'react-apexcharts';
import { ContextShart } from './Output';

const ChartComponent = () => {
    const data = useContext(ContextShart)
    console.log(data)
    const options = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
            {
                name: "AM",
                data: [
                    { x: "Mon", y: data },
                    { x: "Tue", y: 122 },
                    { x: "Wed", y: 63 },
                    { x: "Thu", y: 421 },
                    { x: "Fri", y: 122 },
                    { x: "Sat", y: 323 },
                    { x: "Sun", y: 111 },
                ],
            },
            {
                name: "PM",
                data: [
                    { x: "Mon", y: 232 },
                    { x: "Tue", y: 113 },
                    { x: "Wed", y: 341 },
                    { x: "Thu", y: 224 },
                    { x: "Fri", y: 522 },
                    { x: "Sat", y: 411 },
                    { x: "Sun", y: 243 },
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
