import React, { Component } from "react";
import { link } from "react-router-dom";
const file = 'src/components/user.json';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            name: "",
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //verify_login();
    }

    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        this.setState({ error: null, name: '', 
            email: '', password: ''});
        event.preventDefault();
        try {
            fetch(file, {
                method: "GET",
                headers: {
                    "Content- Type": "application/ json"
                }
            })
                    this.setState({
                    name: "",
                    email: "",
                    password: ""
            });
         } catch (error) {              
                    this.setState({
                        error
                    });
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
