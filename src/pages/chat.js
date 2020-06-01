import React from 'react';
import { auth } from "../pages/auth";
import { db } from "dbserver";

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
            user: auth().currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null

            /* toUser:auth.currentUser,
            read: '',
            fromUser:auth.currentUser,
            message:'',
            Connections */
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.state({ readError: null });
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.foreach((snap) => {
                    chats.push(snap.val());
                });
                this.setState({ chats });
            });
        } catch (error) {
            this.setState({ readError: error.message});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await db.ref("chats").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid
            });
            this.setState({ content: '' });
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
            {this.state.chats.map(chat => {
            <td>return <p key={chat.timestamp}>{chat.content}</p>
            </td>
            })}
            </div>
            <form action= "/messaging.php" onSubmit={this.handleSubmit}>
               <input onChange={this.handleChange} value={this.state.content}></input>
                {this.state.error ? <p>{this.state.writeError}</p> : null}
              <button type="submit">Send</button>
              </form>
            <div>
                Login in as: <strong>{this.state.user.email}</strong>
            </div>
        </div> 
        );
    }
}


