import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Parse from "./helpers/helper.php";
import './css/index.css';



function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/chat" />
          )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    // add app and js keys for Parse Server
    Parse.initialize("yzRv0M18nfehYtjg4toFBzWkRL1WL2Vs6CJVDISv", "4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW");
    Parse.ServerURL = 'https://parseapi.back4app.com';


    this.state = {
      authenticated: false,
      loading: true,
    };
  }


   async componentDidMount() {
     const user = await Parse.User.Login("my_username", "my_password");
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    };
   
  

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            />
            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            />
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />
          </Switch>
        </Router>
      );
  }
}


export default App;
