import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from 'src\helpers\register.php';




export default class SignUp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        username: '',
        password: '',
        email: '',
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
    this.setState({ error: ''});
    try {
        await signup(this.state.username, this.state.password, this.state.email);
    } catch (error) {
        this.setState({ error: error.message });
    }
}


    render() {
        return (
            <div>
                <div class="wrapper">
                <div className="loginPanel">
                    <form action="\register.php" method="post" onSubmit={this.handleSubmit}>
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

      