import React, { Component} from "react";

//import { Chart } from 'react-charts'
//import LineChart, { parseFlatArray } from 'react-linechart';
//import '/home/hp/Desktop/training/react-app-demo/node_modules/react-linechart/dist/styles.css';

//import LineChart from "react-native-responsive-linechart";

import {Line} from 'react-chartjs-2';
import Users from '../services/Users.js'

export default class Graphs extends Component {

	constructor() {
		super();
		this.state = {
		  users_data: null
		};
	  }
  
	  componentDidMount() {

		var that = this;

		/*fetch('http://localhost:8000/all-users', {
			method: "GET",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			  'Cache': 'no-cache'
			},
			credentials: 'same-origin'
		  })*/
		  Users.get().getAll()
		  .then(
			function(response) {
			  if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				  response.status);
				return;
			  }
		
			  // Examine the text in the response
			  response.json().then(function(data) {
				//console.log(data.users);
				that.setState({ users_data: data.users });
				//console.log(cookie.load('token'));
				//cookie.save('token',data.token);
				//console.log(cookie.load('token'));
				
				//that.props.history.push('/poster_page');
			  });
			}
		  )
		  .catch(function(err) {
			console.log('Fetch Error :-S', err);
		  });

	  }

	render() {

		//const temp = this.state.users_data;
		const labels = [];
		const age = [];
		if(this.state.users_data){
			//console.log(this.state.users_data.length);
			for(var i=0; i<this.state.users_data.length; i++){
				//console.log("here");
				labels[i] = this.state.users_data[i].username;
				age[i] = i+5;
	
			}
			
		}
		//console.log(this.state.users_data);
		//console.log(temp.length);
		/*for(var i=0; i<this.state.users_data.length; i++){
			console.log("here");

		}*/
		//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

		const data = {
			labels: labels,
			datasets: [
			{
				label: 'Age',
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
				data: age
			}/*,
			{
				label: 'My second dataset',
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
				data: [55, 49, 70, 78, 56, 45, 30]
			}*/
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
