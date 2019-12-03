import React, { Component } from "react";
import { BrowserRouter as  Link } from "react-router-dom";
//import Cookies from 'universal-cookie';
import cookie from 'react-cookie'
import Users from '../services/Users.js'

//const cookies = new Cookies();
//import Forgot from "./forgot.component.js";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
        
    }
    onSubmit = (event) => {

      var that = this;
        event.preventDefault();

        Users.get().checkLogin(this.state)
        /*fetch('http://localhost:8000/user', {
          method: 'POST',
          
          body: JSON.stringify(this.state),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })*/
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
      
            // Examine the text in the response
            response.json().then(function(data) {
             // console.log(data.token);
              //console.log(cookie.load('token'));
              cookie.save('token',data.token);
              //console.log(cookie.load('token'));
              
              that.props.history.push('/poster_page');
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
      }
        /*
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/poster_page');
            console.log(cookie.load('token'));
           cookie.save('token',cookie.load('token'));
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }*/

    render() {
        return ( 
           
            <form onSubmit={this.onSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Enter username</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.handleInputChange}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </div>


                <button type="submit" value="Submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <Link  to={"/forgot-password"}>password?</Link>
                </p>
            </form>
           
         
        );
    }
}