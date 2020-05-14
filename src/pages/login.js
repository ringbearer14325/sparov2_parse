import React, { Component } from "react";
import { link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
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
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password );
        } catch (error) {
            this.setState ({ error: error.message });
        }
    }

    render() {
        return (
            <div>
                <form 
                autoComplete="off"
                onSubmit={this.handleSubmit}
                >
                <h1>
                        Login to
                    <link to="/">
                        Sparo
                    </link>
                    </h1>
                    <p>
                        Fill in the form below to login to your account.
                    </p>
                  <div>
                     <input 
                       placeholder="Email"
                       name="email"
                       type="email"
                       onChange={this.handleChange}
                       value={this.state.email}
                     />
                  </div>
                    <div>
                     <input
                       placeholder="password"
                       name="password"
                       onChange={this.handleChange}
                       value={this.state.password}
                       type="password"
                     />
                     </div>
                     <div>
                         {this.state.error ? (
                             <p>{this.state.error}</p>
                         ) : null}
                         <button type="submit">Login</button>
                     </div>
                     <hr />
                     <p>
                         Don't have an account? <link to="/Signup">Sign up</link>
                     </p>
                </form>
            </div>
        );
    }
}
