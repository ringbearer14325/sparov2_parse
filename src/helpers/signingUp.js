
use Parse/ParseUser;



class signUp {




const user = new Parse.User();
user.set('username', 'A string');
user.set('email', 'A string');
user.set('name', 'A string');
user.set('password', '#Password123');



user.signUp().then((user) => {
  if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
  console.log('User signed up', user);
}).catch(error => {
  if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
  console.error('Error while signing up user', error);
});


};