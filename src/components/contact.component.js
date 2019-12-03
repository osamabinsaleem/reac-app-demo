import React, { Component} from "react";

export default class Contact extends Component {

	state = {
        contacts: []
	}

	componentDidMount() {
	fetch('http://localhost:8000/all-users')
	.then(res => res.json())
	.then((data) => {
		this.setState({ contacts: data })
		
	})
	.catch(console.log)
	}

	render() {

		console.log(this.state.contacts)
		return (

		 <div>
          <center><h1>Contact List</h1></center>
            
        
         
        </div>
			
			
		);
	}

}