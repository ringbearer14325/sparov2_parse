import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { signUp } from "ParseSignUp";


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

    var CommentBlock = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    // Subscribe to all Comment objects, ordered by creation date
    // The results will be available at this.data.comments
    return {
      comments: (new Parse.Query('Comment')).ascending('createdAt')
    };
  },

  render: function() {
    // Render the text of each comment as a list item
    return (
      <ul>
        {this.data.comments.map(function(c) {
          return <li>{c.text}</li>;
        })}
      </ul>
    );
  }
});
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signUp(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }


    render() {
        return (
            <div>
                <div class="wrapper">
                <div className="loginPanel">
                    <form onSubmit={this.handleSubmit}>
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
