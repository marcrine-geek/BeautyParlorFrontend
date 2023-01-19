var form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var email=document.getElementById('email').value
 var password=document.getElementById('password').value

 const headers = {'Content-Type':'application/json'}

 const data = {
    email:email,
    password:password,
 }

 console.log(data)

 fetch('http://54.227.122.144:8080/api/login', {
  method: 'POST',
//   mode:'no-cors',
  headers:headers,
  body: JSON.stringify({
    email:email,
    password:password,

  }),
  
  })
  .then(function(response){ 
  return response.json()})

  .then(function(data)
  {console.log(data)
  email=document.getElementById("email")
  password=document.getElementById("password")

  email.innerHTML = data.email
  password.innerHTML = data.password  

  console.log(data.email)
  
  if (data.email=="admin@gmail.com") {
    alert('Admin loggedin Successfully');
    window.location.replace('/admin/index.html');

  } else if (data.message=="Unauthorized user") {
    alert('Unauthorized User');
    window.location.replace('/');

  } else if (data.message=="Password is incorrect.") {
    alert('Incorrect Password');
    window.location.replace('/');

  } else {
    alert('Employee loggedin Successfully');
    window.location.replace('/employees/index.html');
  }
  

}).catch(err => console.log(err)); 
});
