import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
//import "src/helpers/helper.php";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        };

        // let install = new Parse.Installation();
        // install.set("deviceType", navigator.userAgent);
        // install.save().then((resp) => {
        //     console.log('Created install object', resp);

        //     this.setState({
        //         result: 'New object created with objectId: ' + resp.id
        //     })
        // }, err => {
        //     console.log('Error creating install object', err);

        //     this.setState({
        //         result: 'Failed to create new object, with error code: ' + err.message
        //     })
       // })
    }    

  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
            <h1>{this.state.result}</h1>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Welcome to Chatty</h1>
              <p className="lead">A great place to share your thoughts with friends</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Create New Account</Link>
                <Link className="btn px-5" to="/login">Login to Your Account</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
