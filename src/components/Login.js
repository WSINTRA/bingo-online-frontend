import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <h3>Sign In</h3>
                {console.log(this.props)}
                <div className="form-group">
                    <label>Name</label>
                    <input type="Name" 
                    name="name"
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
                    placeholder="Enter password"  
                    />
                </div>
                <button onClick={()=>this.props.loginSubmit()} type="submit" className="btn btn-primary btn-block">Submit</button>

            </div>
        );
    }
}
export default Login;