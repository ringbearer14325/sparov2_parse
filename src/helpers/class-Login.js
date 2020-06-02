
import Parse, { Session } from 'parse';
import { useParams } from 'react-router-dom';

class Login {

  user = new Parse.User();

  constructor() {
    Session();    

    this.user = user;
     }
    }

function signUp(post) { 
user.set('username', 'A string');
user.set('email', 'A string');
user.set('name', 'A string');
user.set('password', '#Password123');

var url = "https://parseapi.back4app.com/users";
let keys = {
  "X-Parse-Application-Id" : "BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
  "X-Parse-REST-API-Key" : "swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w",
  "X-Parse-Revocable-Session" : "1"
};
var header = {"Content-Type" : "application/json"};
var body = "src/components/user.json";

 if ($.post(url, keys, header, body) ) {
  user.signUp().then((user) => {
    if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
    console.log('User signed up', user);
  }).catch(error => {
    if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
    console.error('Error while signing up user', error);
  });


}

}



 function verify_user() {

}


 function verify_session() {

}







};