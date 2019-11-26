import React, { Component } from "react";

export default class ListView extends Component {
    render() {
        return (
           
            <div>
                <form action="">
                    <h3>Forgot Password Page</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>

                </form>
                
            </div>
         
        );
    }
}