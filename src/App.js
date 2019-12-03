import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Poster from "./components/poster.component";
import ListView from "./components/listview.component";
import Graphs from "./components/graphs.component";
import Graphs2 from "./components/graphs2.component";
import Forgot from "./components/forgot.component";
import SideBar from "./components/sidebar";
import Contact from "./components/contact.component";
import withAuth from './components/withAuth';

function App() {

  const name = ['osama', 'ali', 'mujtaba', 'hamza'];
  const description = ['ASE', 'VP','ASE','ASE'];
  const divStyle = {
    background: ' #ffffff',
  boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
  borderRadius:'15px',
  transition: 'all .3s'
  };
//const listItems = numbers.map((numbers) =>
 // <li>{numbers}</li>
//);

/*

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>Contacts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>


*/
  return (<Router>
    <div className="App">

    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
  
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Home</Link>
          <Link className="nav-link" to={"/contact"}>Contacts</Link>
          <Link className="nav-link" to={"/sign-in"}>Login</Link>
          <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
        
        </div>
      </nav>

    
      <div className="container h-100">
    <div className="row align-items-center h-100">
        <div className="col-6 mx-auto" style={divStyle}>
        
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/poster_page" component={withAuth(Poster)} />
            <Route path="/contact" component={Contact} />
          
            <Route
            path='/listview_page'
            render={(props) => <ListView name={name} description={description} />}
          />

            <Route path="/graphs_page" component={withAuth(Graphs)} />
            <Route path="/graphs_page2" component={Graphs2} />
            <Route exact path='/forgot-password' component={withAuth(Forgot)} />
          </Switch>

          </div>
        
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link className="navbar-brand " to={"/poster_page"}>Poster/Hamburger</Link>
            </div>
            <div className="col-sm-3">
              <Link className="navbar-brand " to={"/listview_page"}>List View</Link>
            </div>
            <div className="col-sm-3">
              <Link className="navbar-brand " to={"/graphs_page"}>Graphs 1</Link>
            </div>
            <div className="col-sm-3">
              <Link className="navbar-brand " to={"/graphs_page2"}>Graphs 2</Link>
            </div>
          </div>
        </div>
        
      </footer>
    </div></Router>
  );
}

export default App;