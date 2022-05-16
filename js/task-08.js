const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
 event.preventDefault();
 const formRef = event.currentTarget.elements;
 const email = formRef.email.value;
 const password = formRef.password.value;
 const formData = {email, password};
 if(email === ''|| password === '') {
     alert('All fields must be fill out!');
 } else{
     console.log({email, password});
 };

 console.log(formData);
 
 event.currentTarget.reset();
}


