import React from 'react';
const api = "https://parseapi.back4app.com/classes/Message/MyNewObjectId";
const default_query = 'redux';
import { messaging } from "src/helpers/messaging.php";

export default class chat extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                toUser: "",
                fromUser: "",
                message: "",
                writeError: null,

        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
         fetch(api + default_query, {
             method: "GET",
             headers: {
                 "Content- Type": "application/ json"
             }
         })
        .then((response) => response.json())
        .then(toUser => this.setState({ toUser } ) )
        .then(fromUser => this.setState({ fromUser } ) )
        .then(message => this.setState({ message } ) );   
       }
      
    
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await ( this.state.message ).push({
                content: this.state.message,
                uid: this.state.fromUser
            });
            this.setState({ message: '' });
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }
    
    handleChange(event) {
        this.setState({
            content: event.target.value
        });
      }     
      
 
 render() {
     const { fromUser } = this.state;
     const { toUser } = this.state;
     const { message } = this.state;

     return (
        <div>
        <div className="messagePanel">
         <form action= {messaging} onSubmit={this.handleSubmit}>
         <input onChange={this.handleChange} value={this.state.message}></input>
            {fromUser.map(fromUser => 
               <li key={fromUser.objectID}>
            <a href={fromUser.api}>{fromUser.title}</a>
          </li>
        )}
        {toUser.map(toUser => 
        <li key ={toUser.objectID}>
            <a href={toUser.api}>{toUser.title}</a>
         </li>
        )}
         {message.map(message => 
            <li key={message.objectid}>
                <a ref={message.api}>{message.title}</a>
            </li>
         )}
         <button type="submit">Send</button>
           </form>
           </div>
            <div>
                Login in as: <strong>{this.state.currentUser}</strong>
            </div>
        </div> 
        );
    }
}




