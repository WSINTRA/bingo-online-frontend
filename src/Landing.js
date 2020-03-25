import React, { Component } from "react";
import Login from './components/Login';
import App from './App.js'
import Register from './components/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Landing extends Component {

    state={
        name: "",
        password: "",
        userData: "",
        loggedIn: false,
    }
     loginSubmit=()=>{
        console.log("You have submitted")
        fetch("http://localhost:3050/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password
            })
        }).then(res=> res.json()).then(userData => {
            localStorage.setItem("myJWT", userData.jwt)
            this.setState({
                userData: userData.auth,
                loggedIn: true
            })
          }
         )
    }
    registerSubmit=()=>{  
            fetch("http://localhost:3050/api/users", {    
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name,
                    password: this.state.password, 
                })
            }).then(res=> res.json())
            .then(reply=> {
            localStorage.setItem("myJWT", reply.jwt)
            this.setState({
              userData:reply.user,
              loggedIn: true})
            })
        }

    formControl=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }
    componentDidMount() {
        if (localStorage.myJWT) {
            fetch("http://localhost:3050/api/profile", {
                method: "GET",
                headers: {
                Authorization: `Bearer ${localStorage.myJWT}`
                }
            }).then(res => {
                if (!res.ok) {
                    console.log("not logged in", res);
                }
                return res.json()
            }).then(res => {
                    this.setState({
                    userData: res.user,
                    loggedIn: true
                })
            })  
        }
    }
    logout=()=>{
    console.log("Logged out")
    localStorage.clear();
    this.setState({
      loggedIn: false
      })
    }

    render() {
        return (
            <Router>
            {this.state.loggedIn ? <Switch>
                    <Route exact path='/' render={(props)=><App {...props} logout={this.logout}user={this.state.userData} />}  />
                    </Switch>: 
             <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>Willy's Bingo</Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Switch>
                    <Route exact path='/' render={(props)=><Login {...props} name={this.state.name}formControl={this.formControl} loginSubmit={this.loginSubmit} />}  />
                    <Route path="/sign-in" render={(props)=><Login {...props} formControl={this.formControl}loginSubmit={this.loginSubmit} />} />
                    <Route path="/sign-up" render={(props)=><Register {...props} formControl={this.formControl}registerSubmit={this.registerSubmit} />} />} />
                  </Switch>
                </div>
              </div>
            </div>}
           </Router>
          );
    }
}
export default Landing;