const firebaseConfig = {
  apiKey: 'AIzaSyAgATq8qo-b3jF8-bUz-LLlNTog5_2-hjE',
  authDomain: 'contactform-prestige.firebaseapp.com',
  databaseURL: 'https://contactform-prestige-default-rtdb.firebaseio.com',
  projectId: 'contactform-prestige',
  storageBucket: 'contactform-prestige.appspot.com',
  messagingSenderId: '993294497499',
  appId: '1:993294497499:web:f2e5afb0066bd4deb2fefe',
};

//// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
const contactFormDB = firebase.database().ref('contactForm-prestige');
document
  .getElementById('contactForm-prestige')
  .addEventListener('submit', submitForm);

const alerttt = document.querySelector('.alert');

function submitForm(e) {
  e.preventDefault();
  var name = getElVal('name');
  var email = getElVal('email');
  var number = getElVal('number');
  var message = getElVal('message');

  saveMessage(name, email, message, number);

  //enable alert message
  alerttt.style.display = 'block';
  setTimeout(() => (alerttt.style.display = 'none'), 2000);

  document.getElementById('contactForm-prestige').reset();
}

const saveMessage = (name, email, number, message) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    email: email,
    number: number,
    message: message,
  });
};

const getElVal = id => {
  return document.getElementById(id).value;
};
