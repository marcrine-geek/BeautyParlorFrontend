// select file input
const input = document.getElementById('file')

// add event listener
// input.addEventListener('change', () => {
//   uploadFile(input.files[0])
// })

// const headers = {'Content-Type': 'multipart/form-data'}

const uploadFile = (file) => {
    // add the file to the FormData object
    const fd = new FormData()
    fd.append('file', file)
    console.log(file)
    // send `POST` request
    fetch('http://54.227.122.144:8080/upload', {
      method: 'POST',
      mode:'no-cors',
      body:fd
    })
      .then(res => {
        res.json()
        window.location.replace('/');
        alert('CV Uploaded Successfully');

      })
      .then(json => {
        console.log(json)        
      })
      .catch(err => console.error(err))
  }

  

// Event handler executed when a file is selected
const onSelectFile = () => uploadFile(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener('change', onSelectFile, false);
