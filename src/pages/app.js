import React, { Component } from 'react';
import Parse from 'parse';
import {
    Route,
    browserRouter as Router,
    Switch,
    Redirect
    } from "react-router-dom";
    import Home from './pages/Home';
    import Chat from './pages/Chat';
    import Signup from './pages/Signup';
    import Login from './pages/Login';
    import './css/styles.css';



export const auth 
export const db 

function PrivateRoute({ component: Component, authenticated, ... rest}) {
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

function PublicRoute({ component: Component, authenticated, ...rest}) {
    return (
        <Route 
        { ...rest}
        render={(props) => authenticated === false 
            ? <Component { ...props} /> 
            : <redirect to='/chat'/> }
        />
    )
}

render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
            <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
            <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
          </Switch>
        </Router>
      );

    }
    

  class App extends Component {
    constructor() {
      super();
      this.state = {
        authenticated: false,
        loading: true,
      };
    }
  }

export default App;


componentDidMount() {
  auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false,
      });
    } else {
      this.setState({
        authenticated: false,
        loading: false, 
      });
    }
  })
}




