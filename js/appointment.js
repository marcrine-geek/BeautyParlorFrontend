var form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var fullname=document.getElementById('fullname').value
 var email=document.getElementById('email').value
 var message=document.getElementById('message').value

 const headers = {'Content-Type':'application/json'}

 const data = {
    fullname:fullname,
    email:email,
    message:message,
 }

 console.log(data)

 fetch('http://54.227.122.144:8080/api/make/appointment', {
  method: 'POST',
//   mode:'no-cors',
  headers:headers,
  body: JSON.stringify({
    fullname:fullname,
    email:email,
    message:message,

  }),
  
  })
  .then(function(response){ 
  return response.json()})

  .then(function(data)
  {console.log(data)
  fullname=document.getElementById("fullname")
  email=document.getElementById("email")
  message=document.getElementById("message")

  fullname.innerHTML = data.fullname
  email.innerHTML = data.email
  message.innerHTML = data.message  

  alert('Appointment Reserved');
  window.location.replace('/');

}).catch(err => console.log(err)); 
});
