import { user } from "../helpers/signup.php";
import React from 'react';
const file = 'src/components/message.json';

class chatPanel extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }    
}

class messagePanel extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                user: "",
                message: "",
                writeError: null,

        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
         fetch(file, {
             method: "GET",
             headers: {
                 "Content- Type": "application/ json"
             }
         })
        .then((response) => response.json())
        .then(user => this.setState({ user } ) )
        .then(message => this.setState({ message } ) );   
       }
      
    
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await ( message ).push({
                content: this.state.message,
                uid: this.state.user
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
     return (
        <div>
        <div className="messagePanel">
            </div>
            <form action= "/messaging.php" onSubmit={this.handleSubmit}>
               <input onChange={this.handleChange} value={this.state.message}></input>
                {this.state.error ? <p>{this.state.writeError}</p> : null}
              <button type="submit">Send</button>
              </form>
            <div>
                Login in as: <strong>{this.state.currentUser}</strong>
            </div>
        </div> 
        );
    }
}



export default chat;


