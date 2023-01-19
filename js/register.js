var form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var fullname=document.getElementById('fullname').value
 var email=document.getElementById('email').value
 var password=document.getElementById('password').value

 const headers = {'Content-Type':'application/json'}

 const data = {
    fullname:fullname,
    email:email,
    password:password,
 }

 console.log(data)

 fetch('http://54.227.122.144:8080/api/register', {
  method: 'POST',
//   mode:'no-cors',
  headers:headers,
  body: JSON.stringify({
    fullname:fullname,
    email:email,
    password:password,

  }),
  
  })
  .then(function(response){ 
  return response.json()})

  .then(function(data)
  {console.log(data)
  fullname=document.getElementById("fullname")
  email=document.getElementById("email")
  password=document.getElementById("password")

  fullname.innerHTML = data.fullname
  email.innerHTML = data.email
  password.innerHTML = data.password  

  alert('Employee Registered Successfully');
  window.location.replace('/admin/pages/forms/registerEmployees.html');

}).catch(err => console.log(err)); 
});
