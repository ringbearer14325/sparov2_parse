import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { signIn } from "ParseSignUp";

const API = "https://parseapi.back4app.com/users/MyNewUserId";
const default_query = 'redux';
const user = new Parse.User();
user.set('name', 'A string');
user.set('username', 'A string');
user.set('password', '#Password123');
user.set('email', 'A string');

export default class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
         name = "",
         email = "",
         password = ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });

}

async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
        try {
       const result = await axios.get(API + default_query);
            
     this.setState({ data:result.username,
     data:result.password, data:result.email,
    isLoading: false });
    } catch (error) {
        this.setState({ error, isLoading: false });
    }
}


    render() {
        return (
            <div>
                <div class="wrapper">
                <div className="loginPanel">
                    <form action="class-Login.php" method="post" onSubmit={this.handleSubmit}>
                    <h1>
                        Sign Up to
                         <Link to="/">Sparo</Link>
                    </h1>
                    <p>Fill in the form below to create an account.</p>
                    <div>
                       <input placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username} type="username"></input>
                    </div>
                    <div>
                        <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <div>
                        <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <div>
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button type="submit">Sign up</button>
                    </div>
                    <hr></hr>
                    <p>Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
                </div>
            </div>
            </div>
        );
    }    
}
