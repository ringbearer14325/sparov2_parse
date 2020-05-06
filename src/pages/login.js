import React, { Component } from "react";
import { link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub} from "../helpers/auth";


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

    async handlerSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password );
        } catch (error) {
            this.setState ({ error: error.message });
        }
    }




}
