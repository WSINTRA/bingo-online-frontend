import React, { Component } from "react";

class SignUp extends Component {
    render() {
        return (
            <div>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>name</label>
                    <input 
                    name="name"
                    type="text" 
                    onChange={this.props.formControl}
                    value={this.props.name}
                    className="form-control" 
                    placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    onChange={this.props.formControl}
                    value={this.props.password}
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" />
                </div>

                <button 
                onClick={()=>this.props.registerSubmit()}
                type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </div>
        );
    }
}

export default SignUp;