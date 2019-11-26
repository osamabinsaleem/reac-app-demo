import React, { Component ,useRef, useLayoutEffect, useState} from "react";

//import { Chart } from 'react-charts'
//import LineChart, { parseFlatArray } from 'react-linechart';
//import '/home/hp/Desktop/training/react-app-demo/node_modules/react-linechart/dist/styles.css';

//import LineChart from "react-native-responsive-linechart";

import {Line} from 'react-chartjs-2';





export default class Graphs extends Component {

	
	

	  render() {
	
		const gsmData = [
			{
				"Year": 1880,
				"Glob": -19,
				"NHem": -33,
				"SHem": -5
			},
			{
				"Year": 1881,
				"Glob": -10,
				"NHem": -18,
				"SHem": -2
			},
			{
				"Year": 1882,
				"Glob": -15,
				"NHem": -12,
				"SHem": -4
			}
		];
		//const gsmFlat = parseFlatArray(gsmData, "Year", ["Glob", "NHem", "SHem"]);
	/*	const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
const config = {
  line: {
    visible: true,
    strokeWidth: 1,
    strokeColor: "#54a0ff"
  },
  area: {
    visible: false
  },
  tooltip: {
    visible: true,
    labelFontSize: 10
  },
  grid: {
    stepSize: 10000
  },
  yAxis: {
    labelColor: "#54a0ff"
  },
  insetY: 10,
  insetX: 10
};
	*/
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
		  {
			label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		  }
		]
	  };
		return (
           
            <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
         
		);
	  }

}
