import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import cookie from 'react-cookie'


export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
    
      
      const url = 'http://localhost:8000/checkToken/' + cookie.load('token');
      console.log(url);
      fetch(url,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache': 'no-cache'
        },
        credentials: 'same-origin'
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/sign-in" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}